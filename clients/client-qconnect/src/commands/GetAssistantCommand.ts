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

import { GetAssistantRequest, GetAssistantResponse } from "../models/models_0";
import { de_GetAssistantCommand, se_GetAssistantCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAssistantCommand}.
 */
export interface GetAssistantCommandInput extends GetAssistantRequest {}
/**
 * @public
 *
 * The output of {@link GetAssistantCommand}.
 */
export interface GetAssistantCommandOutput extends GetAssistantResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about an assistant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, GetAssistantCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, GetAssistantCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // GetAssistantRequest
 *   assistantId: "STRING_VALUE", // required
 * };
 * const command = new GetAssistantCommand(input);
 * const response = await client.send(command);
 * // { // GetAssistantResponse
 * //   assistant: { // AssistantData
 * //     assistantId: "STRING_VALUE", // required
 * //     assistantArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //       kmsKeyId: "STRING_VALUE",
 * //     },
 * //     integrationConfiguration: { // AssistantIntegrationConfiguration
 * //       topicIntegrationArn: "STRING_VALUE",
 * //     },
 * //     capabilityConfiguration: { // AssistantCapabilityConfiguration
 * //       type: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssistantCommandInput - {@link GetAssistantCommandInput}
 * @returns {@link GetAssistantCommandOutput}
 * @see {@link GetAssistantCommandInput} for command's `input` shape.
 * @see {@link GetAssistantCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 */
export class GetAssistantCommand extends $Command<
  GetAssistantCommandInput,
  GetAssistantCommandOutput,
  QConnectClientResolvedConfig
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
  constructor(readonly input: GetAssistantCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAssistantCommandInput, GetAssistantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAssistantCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QConnectClient";
    const commandName = "GetAssistantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WisdomService",
        operation: "GetAssistant",
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
  private serialize(input: GetAssistantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAssistantCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssistantCommandOutput> {
    return de_GetAssistantCommand(output, context);
  }
}
