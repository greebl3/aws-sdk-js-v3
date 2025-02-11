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

import { UpdateSecurityControlRequest, UpdateSecurityControlResponse } from "../models/models_2";
import { de_UpdateSecurityControlCommand, se_UpdateSecurityControlCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityControlCommand}.
 */
export interface UpdateSecurityControlCommandInput extends UpdateSecurityControlRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityControlCommand}.
 */
export interface UpdateSecurityControlCommandOutput extends UpdateSecurityControlResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             Updates the properties of a security control.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateSecurityControlCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateSecurityControlCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateSecurityControlRequest
 *   SecurityControlId: "STRING_VALUE", // required
 *   Parameters: { // Parameters // required
 *     "<keys>": { // ParameterConfiguration
 *       ValueType: "DEFAULT" || "CUSTOM", // required
 *       Value: { // ParameterValue Union: only one key present
 *         Integer: Number("int"),
 *         IntegerList: [ // IntegerList
 *           Number("int"),
 *         ],
 *         Double: Number("double"),
 *         String: "STRING_VALUE",
 *         StringList: [ // StringList
 *           "STRING_VALUE",
 *         ],
 *         Boolean: true || false,
 *         Enum: "STRING_VALUE",
 *         EnumList: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   LastUpdateReason: "STRING_VALUE",
 * };
 * const command = new UpdateSecurityControlCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSecurityControlCommandInput - {@link UpdateSecurityControlCommandInput}
 * @returns {@link UpdateSecurityControlCommandOutput}
 * @see {@link UpdateSecurityControlCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityControlCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>
 *             The request was rejected because it conflicts with the resource's availability. For example, you tried
 *             to update a security control that's currently in the <code>UPDATING</code> state.
 *         </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To update security control properties
 * ```javascript
 * // The following example updates the specified security control. Specifically, this example updates control parameters.
 * const input = {
 *   "LastUpdateReason": "Comply with internal requirements",
 *   "Parameters": {
 *     "maxCredentialUsageAge": {
 *       "Value": {
 *         "Integer": 15
 *       },
 *       "ValueType": "CUSTOM"
 *     }
 *   },
 *   "SecurityControlId": "ACM.1"
 * };
 * const command = new UpdateSecurityControlCommand(input);
 * await client.send(command);
 * // example id: to-update-security-control-properties-1699282942434
 * ```
 *
 */
export class UpdateSecurityControlCommand extends $Command<
  UpdateSecurityControlCommandInput,
  UpdateSecurityControlCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: UpdateSecurityControlCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSecurityControlCommandInput, UpdateSecurityControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSecurityControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "UpdateSecurityControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "UpdateSecurityControl",
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
  private serialize(input: UpdateSecurityControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSecurityControlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSecurityControlCommandOutput> {
    return de_UpdateSecurityControlCommand(output, context);
  }
}
