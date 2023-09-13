"use client";

import algoliasearch, { type SearchClient } from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks-web";
import { MultipleQueriesQuery } from "@algolia/client-search";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string
);

const customSearchClient = {
  ...searchClient,
  search(queries: readonly MultipleQueriesQuery[]) {
    if (
      queries.every(({ params }) => !params?.query || params.query.length < 3)
    ) {
      return Promise.resolve({
        results: queries.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
          hitsPerPage: 0,
          exhaustiveNbHits: true,
          query: "",
          queryAfterRemoval: "",
          params: "",
          index: "",
        })),
      });
    }

    return searchClient.search(queries);
  },
} satisfies SearchClient;

interface InstantSearchProviderProps {
  children: React.ReactNode;
}

export function InstantSearchProvider({
  children,
}: InstantSearchProviderProps) {
  return (
    <InstantSearch
      searchClient={customSearchClient}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME as string}
    >
      {children}
    </InstantSearch>
  );
}
