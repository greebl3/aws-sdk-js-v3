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

import { CreateConfigurationPolicyRequest, CreateConfigurationPolicyResponse } from "../models/models_2";
import { de_CreateConfigurationPolicyCommand, se_CreateConfigurationPolicyCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateConfigurationPolicyCommand}.
 */
export interface CreateConfigurationPolicyCommandInput extends CreateConfigurationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationPolicyCommand}.
 */
export interface CreateConfigurationPolicyCommandOutput extends CreateConfigurationPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             Creates a configuration policy with the defined configuration. Only the Security Hub delegated administrator
 *             can invoke this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateConfigurationPolicyCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateConfigurationPolicyCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // CreateConfigurationPolicyRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ConfigurationPolicy: { // Policy Union: only one key present
 *     SecurityHub: { // SecurityHubPolicy
 *       ServiceEnabled: true || false,
 *       EnabledStandardIdentifiers: [ // EnabledStandardIdentifierList
 *         "STRING_VALUE",
 *       ],
 *       SecurityControlsConfiguration: { // SecurityControlsConfiguration
 *         EnabledSecurityControlIdentifiers: [ // EnabledSecurityControlIdentifierList
 *           "STRING_VALUE",
 *         ],
 *         DisabledSecurityControlIdentifiers: [ // DisabledSecurityControlIdentifierList
 *           "STRING_VALUE",
 *         ],
 *         SecurityControlCustomParameters: [ // SecurityControlCustomParametersList
 *           { // SecurityControlCustomParameter
 *             SecurityControlId: "STRING_VALUE",
 *             Parameters: { // Parameters
 *               "<keys>": { // ParameterConfiguration
 *                 ValueType: "DEFAULT" || "CUSTOM", // required
 *                 Value: { // ParameterValue Union: only one key present
 *                   Integer: Number("int"),
 *                   IntegerList: [ // IntegerList
 *                     Number("int"),
 *                   ],
 *                   Double: Number("double"),
 *                   String: "STRING_VALUE",
 *                   StringList: [ // StringList
 *                     "STRING_VALUE",
 *                   ],
 *                   Boolean: true || false,
 *                   Enum: "STRING_VALUE",
 *                   EnumList: [
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *               },
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConfigurationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfigurationPolicyResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   ConfigurationPolicy: { // Policy Union: only one key present
 * //     SecurityHub: { // SecurityHubPolicy
 * //       ServiceEnabled: true || false,
 * //       EnabledStandardIdentifiers: [ // EnabledStandardIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityControlsConfiguration: { // SecurityControlsConfiguration
 * //         EnabledSecurityControlIdentifiers: [ // EnabledSecurityControlIdentifierList
 * //           "STRING_VALUE",
 * //         ],
 * //         DisabledSecurityControlIdentifiers: [ // DisabledSecurityControlIdentifierList
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityControlCustomParameters: [ // SecurityControlCustomParametersList
 * //           { // SecurityControlCustomParameter
 * //             SecurityControlId: "STRING_VALUE",
 * //             Parameters: { // Parameters
 * //               "<keys>": { // ParameterConfiguration
 * //                 ValueType: "DEFAULT" || "CUSTOM", // required
 * //                 Value: { // ParameterValue Union: only one key present
 * //                   Integer: Number("int"),
 * //                   IntegerList: [ // IntegerList
 * //                     Number("int"),
 * //                   ],
 * //                   Double: Number("double"),
 * //                   String: "STRING_VALUE",
 * //                   StringList: [ // StringList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   Boolean: true || false,
 * //                   Enum: "STRING_VALUE",
 * //                   EnumList: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateConfigurationPolicyCommandInput - {@link CreateConfigurationPolicyCommandInput}
 * @returns {@link CreateConfigurationPolicyCommandOutput}
 * @see {@link CreateConfigurationPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To create a configuration policy
 * ```javascript
 * // This operation creates a configuration policy in Security Hub.
 * const input = {
 *   "ConfigurationPolicy": {
 *     "SecurityHub": {
 *       "EnabledStandardIdentifiers": [
 *         "arn:aws:securityhub:us-east-1::standards/aws-foundational-security-best-practices/v/1.0.0",
 *         "arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0"
 *       ],
 *       "SecurityControlsConfiguration": {
 *         "DisabledSecurityControlIdentifiers": [
 *           "CloudWatch.1"
 *         ],
 *         "SecurityControlCustomParameters": [
 *           {
 *             "Parameters": {
 *               "daysToExpiration": {
 *                 "Value": {
 *                   "Integer": 14
 *                 },
 *                 "ValueType": "CUSTOM"
 *               }
 *             },
 *             "SecurityControlId": "ACM.1"
 *           }
 *         ]
 *       },
 *       "ServiceEnabled": true
 *     }
 *   },
 *   "Description": "Configuration policy for testing FSBP and CIS",
 *   "Name": "TestConfigurationPolicy"
 * };
 * const command = new CreateConfigurationPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Arn": "arn:aws:securityhub:us-east-1:123456789012:configuration-policy/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "ConfigurationPolicy": {
 *     "SecurityHub": {
 *       "EnabledStandardIdentifiers": [
 *         "arn:aws:securityhub:us-east-1::standards/aws-foundational-security-best-practices/v/1.0.0",
 *         "arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0"
 *       ],
 *       "SecurityControlsConfiguration": {
 *         "DisabledSecurityControlIdentifiers": [
 *           "CloudWatch.1"
 *         ],
 *         "SecurityControlCustomParameters": [
 *           {
 *             "Parameters": {
 *               "daysToExpiration": {
 *                 "Value": {
 *                   "Integer": 14
 *                 },
 *                 "ValueType": "CUSTOM"
 *               }
 *             },
 *             "SecurityControlId": "ACM.1"
 *           }
 *         ]
 *       },
 *       "ServiceEnabled": true
 *     }
 *   },
 *   "CreatedAt": "2023-01-11T06:17:17.154Z",
 *   "Description": "Configuration policy for testing FSBP and CIS",
 *   "Id": "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   "Name": "TestConfigurationPolicy",
 *   "UpdatedAt": "2023-01-11T06:17:17.154Z"
 * }
 * *\/
 * // example id: to-create-a-configuration-policy-1695172470099
 * ```
 *
 */
export class CreateConfigurationPolicyCommand extends $Command<
  CreateConfigurationPolicyCommandInput,
  CreateConfigurationPolicyCommandOutput,
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
  constructor(readonly input: CreateConfigurationPolicyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConfigurationPolicyCommandInput, CreateConfigurationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConfigurationPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "CreateConfigurationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "CreateConfigurationPolicy",
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
  private serialize(input: CreateConfigurationPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateConfigurationPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConfigurationPolicyCommandOutput> {
    return de_CreateConfigurationPolicyCommand(output, context);
  }
}
