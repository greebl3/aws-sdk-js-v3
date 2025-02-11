// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetMergeConflictsCommand,
  GetMergeConflictsCommandInput,
  GetMergeConflictsCommandOutput,
} from "../commands/GetMergeConflictsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: GetMergeConflictsCommandInput,
  ...args: any
): Promise<GetMergeConflictsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetMergeConflictsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetMergeConflicts(
  config: CodeCommitPaginationConfiguration,
  input: GetMergeConflictsCommandInput,
  ...additionalArguments: any
): Paginator<GetMergeConflictsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetMergeConflictsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxConflictFiles"] = config.pageSize;
    if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
