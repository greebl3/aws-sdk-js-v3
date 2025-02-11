// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { CreateTrainingDatasetRequest, CreateTrainingDatasetResponse } from "../models/models_0";
import { de_CreateTrainingDatasetCommand, se_CreateTrainingDatasetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTrainingDatasetCommand}.
 */
export interface CreateTrainingDatasetCommandInput extends CreateTrainingDatasetRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrainingDatasetCommand}.
 */
export interface CreateTrainingDatasetCommandOutput extends CreateTrainingDatasetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Defines the information necessary to create a training dataset, or seed audience. In Clean Rooms ML, the <code>TrainingDataset</code> is metadata that points to a Glue table, which is read only during <code>AudienceModel</code> creation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, CreateTrainingDatasetCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, CreateTrainingDatasetCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // CreateTrainingDatasetRequest
 *   name: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   trainingData: [ // DatasetList // required
 *     { // Dataset
 *       type: "INTERACTIONS", // required
 *       inputConfig: { // DatasetInputConfig
 *         schema: [ // DatasetSchemaList // required
 *           { // ColumnSchema
 *             columnName: "STRING_VALUE", // required
 *             columnTypes: [ // ColumnTypeList // required
 *               "USER_ID" || "ITEM_ID" || "TIMESTAMP" || "CATEGORICAL_FEATURE" || "NUMERICAL_FEATURE",
 *             ],
 *           },
 *         ],
 *         dataSource: { // DataSource
 *           glueDataSource: { // GlueDataSource
 *             tableName: "STRING_VALUE", // required
 *             databaseName: "STRING_VALUE", // required
 *             catalogId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateTrainingDatasetCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrainingDatasetResponse
 * //   trainingDatasetArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrainingDatasetCommandInput - {@link CreateTrainingDatasetCommandInput}
 * @returns {@link CreateTrainingDatasetCommandOutput}
 * @see {@link CreateTrainingDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateTrainingDatasetCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource with that name already exists in this region.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 */
export class CreateTrainingDatasetCommand extends $Command<
  CreateTrainingDatasetCommandInput,
  CreateTrainingDatasetCommandOutput,
  CleanRoomsMLClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateTrainingDatasetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsMLClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTrainingDatasetCommandInput, CreateTrainingDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrainingDatasetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsMLClient";
    const commandName = "CreateTrainingDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStarkControlService",
        operation: "CreateTrainingDataset",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateTrainingDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTrainingDatasetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrainingDatasetCommandOutput> {
    return de_CreateTrainingDatasetCommand(output, context);
  }
}
