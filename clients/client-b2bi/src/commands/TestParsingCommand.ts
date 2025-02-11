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

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { TestParsingRequest, TestParsingResponse } from "../models/models_0";
import { de_TestParsingCommand, se_TestParsingCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestParsingCommand}.
 */
export interface TestParsingCommandInput extends TestParsingRequest {}
/**
 * @public
 *
 * The output of {@link TestParsingCommand}.
 */
export interface TestParsingCommandOutput extends TestParsingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Parses the input EDI (electronic data interchange) file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, TestParsingCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, TestParsingCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // TestParsingRequest
 *   inputFile: { // S3Location
 *     bucketName: "STRING_VALUE",
 *     key: "STRING_VALUE",
 *   },
 *   fileFormat: "XML" || "JSON", // required
 *   ediType: { // EdiType Union: only one key present
 *     x12Details: { // X12Details
 *       transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_214" || "X12_215" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_820" || "X12_824" || "X12_830" || "X12_846" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_940" || "X12_990" || "X12_997",
 *       version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010",
 *     },
 *   },
 * };
 * const command = new TestParsingCommand(input);
 * const response = await client.send(command);
 * // { // TestParsingResponse
 * //   parsedFileContent: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param TestParsingCommandInput - {@link TestParsingCommandInput}
 * @returns {@link TestParsingCommandOutput}
 * @see {@link TestParsingCommandInput} for command's `input` shape.
 * @see {@link TestParsingCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @example Sample TestParsing call
 * ```javascript
 * //
 * const input = {
 *   "ediType": {
 *     "x12Details": {
 *       "version": "VERSION_4010",
 *       "transactionSet": "X12_110"
 *     }
 *   },
 *   "fileFormat": "JSON",
 *   "inputFile": {
 *     "key": "sampleFile.txt",
 *     "bucketName": "test-bucket"
 *   }
 * };
 * const command = new TestParsingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "parsedFileContent": "Sample parsed file content"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class TestParsingCommand extends $Command<
  TestParsingCommandInput,
  TestParsingCommandOutput,
  B2biClientResolvedConfig
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
  constructor(readonly input: TestParsingCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: B2biClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestParsingCommandInput, TestParsingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TestParsingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "B2biClient";
    const commandName = "TestParsingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "B2BI",
        operation: "TestParsing",
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
  private serialize(input: TestParsingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestParsingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestParsingCommandOutput> {
    return de_TestParsingCommand(output, context);
  }
}
