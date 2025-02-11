// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRegistriesCommand,
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput,
} from "../commands/ListRegistriesCommand";
import { SchemasClient } from "../SchemasClient";
import { SchemasPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SchemasClient,
  input: ListRegistriesCommandInput,
  ...args: any
): Promise<ListRegistriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRegistriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRegistries(
  config: SchemasPaginationConfiguration,
  input: ListRegistriesCommandInput,
  ...additionalArguments: any
): Paginator<ListRegistriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRegistriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof SchemasClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Schemas | SchemasClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
