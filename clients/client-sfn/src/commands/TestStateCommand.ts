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
  TestStateInput,
  TestStateInputFilterSensitiveLog,
  TestStateOutput,
  TestStateOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_TestStateCommand, se_TestStateCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestStateCommand}.
 */
export interface TestStateCommandInput extends TestStateInput {}
/**
 * @public
 *
 * The output of {@link TestStateCommand}.
 */
export interface TestStateCommandOutput extends TestStateOutput, __MetadataBearer {}

/**
 * @public
 * <p>Accepts the definition of a single state and executes it. You can test a state without creating a state machine or updating an existing state machine. Using this API, you can test the following:</p>
 *          <ul>
 *             <li>
 *                <p>A state's <a href="https://docs.aws.amazon.com/step-functions/latest/dg/test-state-isolation.html#test-state-input-output-dataflow">input and output processing</a> data flow</p>
 *             </li>
 *             <li>
 *                <p>An <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-services.html">Amazon Web Services service integration</a> request and response</p>
 *             </li>
 *             <li>
 *                <p>An <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-third-party-apis.html">HTTP Task</a> request and response</p>
 *             </li>
 *          </ul>
 *          <p>You can call this API on only one state at a time. The states that you can test include the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-task-state.html#task-types">All Task types</a> except <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-activities.html">Activity</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-pass-state.html">Pass</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-wait-state.html">Wait</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-choice-state.html">Choice</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-succeed-state.html">Succeed</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-fail-state.html">Fail</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>The <code>TestState</code> API assumes an IAM role which must contain the required IAM permissions for the resources your state is accessing. For information about the permissions a state might need, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/test-state-isolation.html#test-state-permissions">IAM permissions to test a state</a>.</p>
 *          <p>The <code>TestState</code> API can run for up to five minutes. If the execution of a state exceeds this duration, it fails with the <code>States.Timeout</code> error.</p>
 *          <p>
 *             <code>TestState</code> doesn't support <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-activities.html">Activity tasks</a>, <code>.sync</code> or <code>.waitForTaskToken</code>
 *             <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html">service integration patterns</a>, <a href="https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-parallel-state.html">Parallel</a>, or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-map-state.html">Map</a> states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, TestStateCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, TestStateCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // TestStateInput
 *   definition: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   input: "STRING_VALUE",
 *   inspectionLevel: "INFO" || "DEBUG" || "TRACE",
 *   revealSecrets: true || false,
 * };
 * const command = new TestStateCommand(input);
 * const response = await client.send(command);
 * // { // TestStateOutput
 * //   output: "STRING_VALUE",
 * //   error: "STRING_VALUE",
 * //   cause: "STRING_VALUE",
 * //   inspectionData: { // InspectionData
 * //     input: "STRING_VALUE",
 * //     afterInputPath: "STRING_VALUE",
 * //     afterParameters: "STRING_VALUE",
 * //     result: "STRING_VALUE",
 * //     afterResultSelector: "STRING_VALUE",
 * //     afterResultPath: "STRING_VALUE",
 * //     request: { // InspectionDataRequest
 * //       protocol: "STRING_VALUE",
 * //       method: "STRING_VALUE",
 * //       url: "STRING_VALUE",
 * //       headers: "STRING_VALUE",
 * //       body: "STRING_VALUE",
 * //     },
 * //     response: { // InspectionDataResponse
 * //       protocol: "STRING_VALUE",
 * //       statusCode: "STRING_VALUE",
 * //       statusMessage: "STRING_VALUE",
 * //       headers: "STRING_VALUE",
 * //       body: "STRING_VALUE",
 * //     },
 * //   },
 * //   nextState: "STRING_VALUE",
 * //   status: "SUCCEEDED" || "FAILED" || "RETRIABLE" || "CAUGHT_ERROR",
 * // };
 *
 * ```
 *
 * @param TestStateCommandInput - {@link TestStateCommandInput}
 * @returns {@link TestStateCommandOutput}
 * @see {@link TestStateCommandInput} for command's `input` shape.
 * @see {@link TestStateCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link InvalidDefinition} (client fault)
 *  <p>The provided Amazon States Language definition is not valid.</p>
 *
 * @throws {@link InvalidExecutionInput} (client fault)
 *  <p>The provided JSON input data is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class TestStateCommand extends $Command<TestStateCommandInput, TestStateCommandOutput, SFNClientResolvedConfig> {
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
  constructor(readonly input: TestStateCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestStateCommandInput, TestStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TestStateCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "TestStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestStateInputFilterSensitiveLog,
      outputFilterSensitiveLog: TestStateOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStepFunctions",
        operation: "TestState",
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
  private serialize(input: TestStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestStateCommandOutput> {
    return de_TestStateCommand(output, context);
  }
}
