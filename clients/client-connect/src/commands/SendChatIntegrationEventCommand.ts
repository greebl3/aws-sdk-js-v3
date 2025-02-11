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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { SendChatIntegrationEventRequest, SendChatIntegrationEventResponse } from "../models/models_2";
import { de_SendChatIntegrationEventCommand, se_SendChatIntegrationEventCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendChatIntegrationEventCommand}.
 */
export interface SendChatIntegrationEventCommandInput extends SendChatIntegrationEventRequest {}
/**
 * @public
 *
 * The output of {@link SendChatIntegrationEventCommand}.
 */
export interface SendChatIntegrationEventCommandOutput extends SendChatIntegrationEventResponse, __MetadataBearer {}

/**
 * @public
 * <p>Processes chat integration events from Amazon Web Services or external integrations to
 *     Amazon Connect. A chat integration event includes:</p>
 *          <ul>
 *             <li>
 *                <p>SourceId, DestinationId, and Subtype: a set of identifiers, uniquely representing a
 *      chat</p>
 *             </li>
 *             <li>
 *                <p> ChatEvent: details of the chat action to perform such as sending a message, event, or
 *      disconnecting from a chat</p>
 *             </li>
 *          </ul>
 *          <p>When a chat integration event is sent with chat identifiers that do not map to an active
 *    chat contact, a new chat contact is also created before handling chat action. </p>
 *          <p>Access to this API is currently restricted to Amazon Pinpoint for supporting SMS
 *    integration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SendChatIntegrationEventCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SendChatIntegrationEventCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SendChatIntegrationEventRequest
 *   SourceId: "STRING_VALUE", // required
 *   DestinationId: "STRING_VALUE", // required
 *   Subtype: "STRING_VALUE",
 *   Event: { // ChatEvent
 *     Type: "DISCONNECT" || "MESSAGE" || "EVENT", // required
 *     ContentType: "STRING_VALUE",
 *     Content: "STRING_VALUE",
 *   },
 *   NewSessionDetails: { // NewSessionDetails
 *     SupportedMessagingContentTypes: [ // SupportedMessagingContentTypes
 *       "STRING_VALUE",
 *     ],
 *     ParticipantDetails: { // ParticipantDetails
 *       DisplayName: "STRING_VALUE", // required
 *     },
 *     Attributes: { // Attributes
 *       "<keys>": "STRING_VALUE",
 *     },
 *     StreamingConfiguration: { // ChatStreamingConfiguration
 *       StreamingEndpointArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new SendChatIntegrationEventCommand(input);
 * const response = await client.send(command);
 * // { // SendChatIntegrationEventResponse
 * //   InitialContactId: "STRING_VALUE",
 * //   NewChatCreated: true || false,
 * // };
 *
 * ```
 *
 * @param SendChatIntegrationEventCommandInput - {@link SendChatIntegrationEventCommandInput}
 * @returns {@link SendChatIntegrationEventCommandOutput}
 * @see {@link SendChatIntegrationEventCommandInput} for command's `input` shape.
 * @see {@link SendChatIntegrationEventCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class SendChatIntegrationEventCommand extends $Command<
  SendChatIntegrationEventCommandInput,
  SendChatIntegrationEventCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: SendChatIntegrationEventCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendChatIntegrationEventCommandInput, SendChatIntegrationEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SendChatIntegrationEventCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "SendChatIntegrationEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "SendChatIntegrationEvent",
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
  private serialize(input: SendChatIntegrationEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SendChatIntegrationEventCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendChatIntegrationEventCommandOutput> {
    return de_SendChatIntegrationEventCommand(output, context);
  }
}
