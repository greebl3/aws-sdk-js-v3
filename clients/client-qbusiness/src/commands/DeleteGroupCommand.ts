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

import { DeleteGroupRequest, DeleteGroupResponse } from "../models/models_0";
import { de_DeleteGroupCommand, se_DeleteGroupCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteGroupCommand}.
 */
export interface DeleteGroupCommandInput extends DeleteGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGroupCommand}.
 */
export interface DeleteGroupCommandOutput extends DeleteGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a group so that all users and sub groups that belong to the group can no
 *             longer access documents only available to that group. For example, after deleting the
 *             group "Summer Interns", all interns who belonged to that group no longer see intern-only
 *             documents in their chat results. </p>
 *          <p>If you want to delete, update, or replace users or sub groups of a group, you need to
 *             use the <code>PutGroup</code> operation. For example, if a user in the group
 *             "Engineering" leaves the engineering team and another user takes their place, you
 *             provide an updated list of users or sub groups that belong to the "Engineering" group
 *             when calling <code>PutGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, DeleteGroupCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, DeleteGroupCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // DeleteGroupRequest
 *   applicationId: "STRING_VALUE", // required
 *   indexId: "STRING_VALUE", // required
 *   groupName: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE",
 * };
 * const command = new DeleteGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGroupCommandInput - {@link DeleteGroupCommandInput}
 * @returns {@link DeleteGroupCommandOutput}
 * @see {@link DeleteGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupCommandOutput} for command's `response` shape.
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
export class DeleteGroupCommand extends $Command<
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput,
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
  constructor(readonly input: DeleteGroupCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGroupCommandInput, DeleteGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteGroupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QBusinessClient";
    const commandName = "DeleteGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ExpertQ",
        operation: "DeleteGroup",
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
  private serialize(input: DeleteGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGroupCommandOutput> {
    return de_DeleteGroupCommand(output, context);
  }
}
