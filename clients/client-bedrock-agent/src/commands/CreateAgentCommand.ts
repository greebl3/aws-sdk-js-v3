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

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import {
  CreateAgentRequest,
  CreateAgentRequestFilterSensitiveLog,
  CreateAgentResponse,
  CreateAgentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAgentCommand, se_CreateAgentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAgentCommand}.
 */
export interface CreateAgentCommandInput extends CreateAgentRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentCommand}.
 */
export interface CreateAgentCommandOutput extends CreateAgentResponse, __MetadataBearer {}

/**
 * @public
 * Creates an Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateAgentCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateAgentCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // CreateAgentRequest
 *   agentName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   instruction: "STRING_VALUE",
 *   foundationModel: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   idleSessionTTLInSeconds: Number("int"),
 *   agentResourceRoleArn: "STRING_VALUE", // required
 *   customerEncryptionKeyArn: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   promptOverrideConfiguration: { // PromptOverrideConfiguration
 *     promptConfigurations: [ // PromptConfigurations // required
 *       { // PromptConfiguration
 *         promptType: "PRE_PROCESSING" || "ORCHESTRATION" || "POST_PROCESSING" || "KNOWLEDGE_BASE_RESPONSE_GENERATION",
 *         promptCreationMode: "DEFAULT" || "OVERRIDDEN",
 *         promptState: "ENABLED" || "DISABLED",
 *         basePromptTemplate: "STRING_VALUE",
 *         inferenceConfiguration: { // InferenceConfiguration
 *           temperature: Number("float"),
 *           topP: Number("float"),
 *           topK: Number("int"),
 *           maximumLength: Number("int"),
 *           stopSequences: [ // StopSequences
 *             "STRING_VALUE",
 *           ],
 *         },
 *         parserMode: "DEFAULT" || "OVERRIDDEN",
 *       },
 *     ],
 *     overrideLambda: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAgentCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentResponse
 * //   agent: { // Agent
 * //     agentId: "STRING_VALUE", // required
 * //     agentName: "STRING_VALUE", // required
 * //     agentArn: "STRING_VALUE", // required
 * //     agentVersion: "STRING_VALUE", // required
 * //     clientToken: "STRING_VALUE",
 * //     instruction: "STRING_VALUE",
 * //     agentStatus: "CREATING" || "PREPARING" || "PREPARED" || "NOT_PREPARED" || "DELETING" || "FAILED" || "VERSIONING" || "UPDATING", // required
 * //     foundationModel: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     idleSessionTTLInSeconds: Number("int"), // required
 * //     agentResourceRoleArn: "STRING_VALUE", // required
 * //     customerEncryptionKeyArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     preparedAt: new Date("TIMESTAMP"),
 * //     failureReasons: [ // FailureReasons
 * //       "STRING_VALUE",
 * //     ],
 * //     recommendedActions: [ // RecommendedActions
 * //       "STRING_VALUE",
 * //     ],
 * //     promptOverrideConfiguration: { // PromptOverrideConfiguration
 * //       promptConfigurations: [ // PromptConfigurations // required
 * //         { // PromptConfiguration
 * //           promptType: "PRE_PROCESSING" || "ORCHESTRATION" || "POST_PROCESSING" || "KNOWLEDGE_BASE_RESPONSE_GENERATION",
 * //           promptCreationMode: "DEFAULT" || "OVERRIDDEN",
 * //           promptState: "ENABLED" || "DISABLED",
 * //           basePromptTemplate: "STRING_VALUE",
 * //           inferenceConfiguration: { // InferenceConfiguration
 * //             temperature: Number("float"),
 * //             topP: Number("float"),
 * //             topK: Number("int"),
 * //             maximumLength: Number("int"),
 * //             stopSequences: [ // StopSequences
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           parserMode: "DEFAULT" || "OVERRIDDEN",
 * //         },
 * //       ],
 * //       overrideLambda: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAgentCommandInput - {@link CreateAgentCommandInput}
 * @returns {@link CreateAgentCommandOutput}
 * @see {@link CreateAgentCommandInput} for command's `input` shape.
 * @see {@link CreateAgentCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 */
export class CreateAgentCommand extends $Command<
  CreateAgentCommandInput,
  CreateAgentCommandOutput,
  BedrockAgentClientResolvedConfig
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
  constructor(readonly input: CreateAgentCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockAgentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAgentCommandInput, CreateAgentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateAgentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockAgentClient";
    const commandName = "CreateAgentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAgentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAgentResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockAgentBuildTimeLambda",
        operation: "CreateAgent",
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
  private serialize(input: CreateAgentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAgentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAgentCommandOutput> {
    return de_CreateAgentCommand(output, context);
  }
}
