import { Language } from "../types";
import { TranslationKeys } from "../i18n";

interface CrossRefAuthor {
  family: string;
  given?: string;
}

interface OpenLibraryAuthor {
  name: string;
}

export const fetchFromCrossRef = async (
  doi: string,
  lang: Language,
  t: (key: keyof TranslationKeys) => string,
): Promise<string> => {
  const response = await fetch(`https://api.crossref.org/works/${doi}`);
  if (!response.ok) throw new Error(t("no_article_found"));
  const data = await response.json();
  const item = data.message;

  const authors = item.author
    ? item.author.map(
        (a: CrossRefAuthor) =>
          `${a.family}, ${a.given ? a.given.charAt(0) + "." : ""}`,
      )
    : [t("not_available")];
  const year =
    item.published && item.published["date-parts"]
      ? item.published["date-parts"][0][0]
      : lang === "tr"
        ? "t.y."
        : "n.d.";
  const title =
    item.title && item.title.length > 0 ? item.title[0] : t("no_title");
  const journal =
    item["container-title"] && item["container-title"].length > 0
      ? item["container-title"][0]
      : "";
  const volume = item.volume || "";
  const issue = item.issue || "";
  const pages = item.page ? `s. ${item.page}.` : "";

  return journal
    ? `${authors.join(", ")} (${year}). ${title}. *${journal}*${volume ? `, *${volume}*` : ""}${issue ? `(${issue})` : ""}${pages ? `, ${pages}` : "."} https://doi.org/${doi}`
    : `${authors.join(", ")} (${year}). *${title}*. https://doi.org/${doi}`;
};

export const fetchFromOpenLibrary = async (
  isbn: string,
  lang: Language,
  t: (key: keyof TranslationKeys) => string,
): Promise<string> => {
  const response = await fetch(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`,
  );
  if (!response.ok) throw new Error(t("general_error"));
  const data = await response.json();
  const item = data[`ISBN:${isbn}`];

  if (!item) throw new Error(t("no_book_found"));

  const authors = item.authors
    ? item.authors.map((a: OpenLibraryAuthor) => a.name).join(", ")
    : t("no_author");
  const yearMatch = item.publish_date
    ? String(item.publish_date).match(/\d{4}/)
    : null;
  const year = yearMatch ? yearMatch[0] : lang === "tr" ? "t.y." : "n.d.";

  const title = item.title;
  const publisher = item.publishers
    ? item.publishers[0].name
    : t("no_publisher");

  return `${authors} (${year}). *${title}*. ${publisher}.`;
};
