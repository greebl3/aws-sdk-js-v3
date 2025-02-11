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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  GetComputeAccessInput,
  GetComputeAccessOutput,
  GetComputeAccessOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetComputeAccessCommand, se_GetComputeAccessCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetComputeAccessCommand}.
 */
export interface GetComputeAccessCommandInput extends GetComputeAccessInput {}
/**
 * @public
 *
 * The output of {@link GetComputeAccessCommand}.
 */
export interface GetComputeAccessCommandOutput extends GetComputeAccessOutput, __MetadataBearer {}

/**
 * @public
 * <p>Requests authorization to remotely connect to a compute resource in an Amazon GameLift fleet.
 *             Call this action to connect to an instance in a managed EC2 fleet if the fleet's game
 *             build uses Amazon GameLift server SDK 5.x or later. To connect to instances with game builds
 *             that use server SDK 4.x or earlier, call <a>GetInstanceAccess</a>.</p>
 *          <p>To request access to a compute, identify the specific EC2 instance and the fleet it
 *             belongs to. You can retrieve instances for a managed EC2 fleet by calling <a>ListCompute</a>. </p>
 *          <p>If successful, this operation returns a set of temporary Amazon Web Services credentials, including
 *             a two-part access key and a session token. Use these credentials with Amazon EC2 Systems Manager (SSM)
 *             to start a session with the compute. For more details, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html#sessions-start-cli"> Starting a session (CLI)</a> in the <i>Amazon EC2 Systems Manager User Guide</i>.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely connect to fleet
 *                 instances</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug fleet
 *                 issues</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetComputeAccessCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetComputeAccessCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // GetComputeAccessInput
 *   FleetId: "STRING_VALUE", // required
 *   ComputeName: "STRING_VALUE", // required
 * };
 * const command = new GetComputeAccessCommand(input);
 * const response = await client.send(command);
 * // { // GetComputeAccessOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   ComputeName: "STRING_VALUE",
 * //   ComputeArn: "STRING_VALUE",
 * //   Credentials: { // AwsCredentials
 * //     AccessKeyId: "STRING_VALUE",
 * //     SecretAccessKey: "STRING_VALUE",
 * //     SessionToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComputeAccessCommandInput - {@link GetComputeAccessCommandInput}
 * @returns {@link GetComputeAccessCommandOutput}
 * @see {@link GetComputeAccessCommandInput} for command's `input` shape.
 * @see {@link GetComputeAccessCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class GetComputeAccessCommand extends $Command<
  GetComputeAccessCommandInput,
  GetComputeAccessCommandOutput,
  GameLiftClientResolvedConfig
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
  constructor(readonly input: GetComputeAccessCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComputeAccessCommandInput, GetComputeAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComputeAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "GetComputeAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetComputeAccessOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "GetComputeAccess",
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
  private serialize(input: GetComputeAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetComputeAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComputeAccessCommandOutput> {
    return de_GetComputeAccessCommand(output, context);
  }
}
