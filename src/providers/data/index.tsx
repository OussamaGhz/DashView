import graphqlDataProvider, {
  GraphQLClient,
  liveProvider as graphqlLiveProvider,
} from "@refinedev/nestjs-query";
import { createClient } from "graphql-ws";
import { fetchWraper } from "./fetch-wrapper";

const API_URL = "https://api.crm.refine.dev";
const BASE_API_URL = "https://api.crm.refine.dev";
const WS_URL = "https://api.crm.refine.dev/graphql";


/**
 * The GraphQL client used for making API requests.
 * 
 * This client is initialized with the API URL and a custom fetch function.
 * The custom fetch function wraps the default fetch function with error handling. (fetch-wrapper component)
 */
export const client = new GraphQLClient(API_URL, {
    fetch: (url: string, options: RequestInit) => {
        try {
            return fetchWraper(url, options);
        } catch (error) {
            return Promise.reject(error as Error);
        }
    },
});


/**
 *  creating webSocket graphQL client instance.
 * 
 *
 * This client is created using the `createClient` function from the `graphql-ws` library.
 * It establishes a WebSocket connection to the specified `WS_URL` and includes the access token
 * in the connection headers for authorization.
 * 
 * @returns The WebSocket client instance or `undefined` if running in a non-browser environment.
 */
export const wsClient =
    typeof window !== undefined
        ? createClient({
                url: WS_URL,
                connectionParams: () => {
                    const acessToken = window.localStorage.getItem("access_token");
                    return {
                        headers: {
                            Authorization: `Bearer ${acessToken}`,
                        },
                    };
                },
            })
        : undefined;



// exporting the data and live provider to use on the refine context

// This data provider is used to fetch data from a GraphQL server.
export const dataProvider = graphqlDataProvider(client);
// liveProvider to listen to changes in real time (feature in Refine)
export const liveProvider = wsClient
  ? graphqlLiveProvider(wsClient)
  : undefined;
