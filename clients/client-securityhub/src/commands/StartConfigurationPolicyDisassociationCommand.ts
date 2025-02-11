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

import {
  StartConfigurationPolicyDisassociationRequest,
  StartConfigurationPolicyDisassociationResponse,
} from "../models/models_2";
import {
  de_StartConfigurationPolicyDisassociationCommand,
  se_StartConfigurationPolicyDisassociationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartConfigurationPolicyDisassociationCommand}.
 */
export interface StartConfigurationPolicyDisassociationCommandInput
  extends StartConfigurationPolicyDisassociationRequest {}
/**
 * @public
 *
 * The output of {@link StartConfigurationPolicyDisassociationCommand}.
 */
export interface StartConfigurationPolicyDisassociationCommandOutput
  extends StartConfigurationPolicyDisassociationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *             Disassociates a target account, organizational unit, or the root from a specified configuration. When you
 *             disassociate a configuration from its target, the target inherits the configuration of the closest parent. If there’s no
 *             configuration to inherit, the target retains its settings but becomes a self-managed account. A target can be disassociated from
 *             a configuration policy or self-managed behavior. Only the Security Hub delegated administrator can invoke this
 *             operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, StartConfigurationPolicyDisassociationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, StartConfigurationPolicyDisassociationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // StartConfigurationPolicyDisassociationRequest
 *   Target: { // Target Union: only one key present
 *     AccountId: "STRING_VALUE",
 *     OrganizationalUnitId: "STRING_VALUE",
 *     RootId: "STRING_VALUE",
 *   },
 *   ConfigurationPolicyIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartConfigurationPolicyDisassociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartConfigurationPolicyDisassociationCommandInput - {@link StartConfigurationPolicyDisassociationCommandInput}
 * @returns {@link StartConfigurationPolicyDisassociationCommandOutput}
 * @see {@link StartConfigurationPolicyDisassociationCommandInput} for command's `input` shape.
 * @see {@link StartConfigurationPolicyDisassociationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To disassociate a configuration from a target
 * ```javascript
 * // This operation disassociates a configuration policy or self-managed behavior from the target account, organizational unit, or the root.
 * const input = {
 *   "ConfigurationPolicyIdentifier": "SELF_MANAGED_SECURITY_HUB",
 *   "Target": {
 *     "RootId": "r-f6g7h8i9j0example"
 *   }
 * };
 * const command = new StartConfigurationPolicyDisassociationCommand(input);
 * await client.send(command);
 * // example id: to-disassociate-a-configuration-from-a-target-1695177176748
 * ```
 *
 */
export class StartConfigurationPolicyDisassociationCommand extends $Command<
  StartConfigurationPolicyDisassociationCommandInput,
  StartConfigurationPolicyDisassociationCommandOutput,
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
  constructor(readonly input: StartConfigurationPolicyDisassociationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartConfigurationPolicyDisassociationCommandInput, StartConfigurationPolicyDisassociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartConfigurationPolicyDisassociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "StartConfigurationPolicyDisassociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "StartConfigurationPolicyDisassociation",
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
  private serialize(
    input: StartConfigurationPolicyDisassociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartConfigurationPolicyDisassociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartConfigurationPolicyDisassociationCommandOutput> {
    return de_StartConfigurationPolicyDisassociationCommand(output, context);
  }
}
