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

import { UpdateDataSourceRequest, UpdateDataSourceResponse } from "../models/models_0";
import { de_UpdateDataSourceCommand, se_UpdateDataSourceCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandInput extends UpdateDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandOutput extends UpdateDataSourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing Amazon Q data source connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, UpdateDataSourceCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, UpdateDataSourceCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // UpdateDataSourceRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   configuration: "DOCUMENT_VALUE",
 *   vpcConfiguration: { // DataSourceVpcConfiguration
 *     subnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   description: "STRING_VALUE",
 *   syncSchedule: "STRING_VALUE",
 *   roleArn: "STRING_VALUE",
 *   documentEnrichmentConfiguration: { // DocumentEnrichmentConfiguration
 *     inlineConfigurations: [ // InlineDocumentEnrichmentConfigurations
 *       { // InlineDocumentEnrichmentConfiguration
 *         condition: { // DocumentAttributeCondition
 *           key: "STRING_VALUE", // required
 *           operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 *           value: { // DocumentAttributeValue Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [ // DocumentAttributeStringListValue
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *         },
 *         target: { // DocumentAttributeTarget
 *           key: "STRING_VALUE", // required
 *           value: {//  Union: only one key present
 *             stringValue: "STRING_VALUE",
 *             stringListValue: [
 *               "STRING_VALUE",
 *             ],
 *             longValue: Number("long"),
 *             dateValue: new Date("TIMESTAMP"),
 *           },
 *           attributeValueOperator: "DELETE",
 *         },
 *         documentContentOperator: "DELETE",
 *       },
 *     ],
 *     preExtractionHookConfiguration: { // HookConfiguration
 *       invocationCondition: {
 *         key: "STRING_VALUE", // required
 *         operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           stringListValue: [
 *             "STRING_VALUE",
 *           ],
 *           longValue: Number("long"),
 *           dateValue: new Date("TIMESTAMP"),
 *         },
 *       },
 *       lambdaArn: "STRING_VALUE",
 *       s3BucketName: "STRING_VALUE",
 *       roleArn: "STRING_VALUE",
 *     },
 *     postExtractionHookConfiguration: {
 *       invocationCondition: {
 *         key: "STRING_VALUE", // required
 *         operator: "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "EXISTS" || "NOT_EXISTS" || "BEGINS_WITH", // required
 *         value: {//  Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           stringListValue: [
 *             "STRING_VALUE",
 *           ],
 *           longValue: Number("long"),
 *           dateValue: new Date("TIMESTAMP"),
 *         },
 *       },
 *       lambdaArn: "STRING_VALUE",
 *       s3BucketName: "STRING_VALUE",
 *       roleArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateDataSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDataSourceCommandInput - {@link UpdateDataSourceCommandInput}
 * @returns {@link UpdateDataSourceCommandOutput}
 * @see {@link UpdateDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourceCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistences with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Make sure you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 */
export class UpdateDataSourceCommand extends $Command<
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
  QBusinessClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateDataSourceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDataSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QBusinessClient";
    const commandName = "UpdateDataSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ExpertQ",
        operation: "UpdateDataSource",
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
  private serialize(input: UpdateDataSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDataSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDataSourceCommandOutput> {
    return de_UpdateDataSourceCommand(output, context);
  }
}
