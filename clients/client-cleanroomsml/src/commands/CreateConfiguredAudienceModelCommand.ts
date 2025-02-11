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
import { CreateConfiguredAudienceModelRequest, CreateConfiguredAudienceModelResponse } from "../models/models_0";
import {
  de_CreateConfiguredAudienceModelCommand,
  se_CreateConfiguredAudienceModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateConfiguredAudienceModelCommand}.
 */
export interface CreateConfiguredAudienceModelCommandInput extends CreateConfiguredAudienceModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredAudienceModelCommand}.
 */
export interface CreateConfiguredAudienceModelCommandOutput
  extends CreateConfiguredAudienceModelResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Defines the information necessary to create a configured audience model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, CreateConfiguredAudienceModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, CreateConfiguredAudienceModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // CreateConfiguredAudienceModelRequest
 *   name: "STRING_VALUE", // required
 *   audienceModelArn: "STRING_VALUE", // required
 *   outputConfig: { // ConfiguredAudienceModelOutputConfig
 *     destination: { // AudienceDestination
 *       s3Destination: { // S3ConfigMap
 *         s3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     roleArn: "STRING_VALUE", // required
 *   },
 *   description: "STRING_VALUE",
 *   sharedAudienceMetrics: [ // MetricsList // required
 *     "ALL" || "NONE",
 *   ],
 *   minMatchingSeedSize: Number("int"),
 *   audienceSizeConfig: { // AudienceSizeConfig
 *     audienceSizeType: "ABSOLUTE" || "PERCENTAGE", // required
 *     audienceSizeBins: [ // AudienceSizeBins // required
 *       Number("int"),
 *     ],
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   childResourceTagOnCreatePolicy: "FROM_PARENT_RESOURCE" || "NONE",
 * };
 * const command = new CreateConfiguredAudienceModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredAudienceModelResponse
 * //   configuredAudienceModelArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateConfiguredAudienceModelCommandInput - {@link CreateConfiguredAudienceModelCommandInput}
 * @returns {@link CreateConfiguredAudienceModelCommandOutput}
 * @see {@link CreateConfiguredAudienceModelCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredAudienceModelCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource with that name already exists in this region.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 */
export class CreateConfiguredAudienceModelCommand extends $Command<
  CreateConfiguredAudienceModelCommandInput,
  CreateConfiguredAudienceModelCommandOutput,
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
  constructor(readonly input: CreateConfiguredAudienceModelCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsMLClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfiguredAudienceModelCommandInput, CreateConfiguredAudienceModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfiguredAudienceModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsMLClient";
    const commandName = "CreateConfiguredAudienceModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStarkControlService",
        operation: "CreateConfiguredAudienceModel",
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
  private serialize(input: CreateConfiguredAudienceModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateConfiguredAudienceModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConfiguredAudienceModelCommandOutput> {
    return de_CreateConfiguredAudienceModelCommand(output, context);
  }
}
