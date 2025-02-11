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
import { UpdateTransformerRequest, UpdateTransformerResponse } from "../models/models_0";
import { de_UpdateTransformerCommand, se_UpdateTransformerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTransformerCommand}.
 */
export interface UpdateTransformerCommandInput extends UpdateTransformerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTransformerCommand}.
 */
export interface UpdateTransformerCommandOutput extends UpdateTransformerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified parameters for a transformer. Transformers describe how to process the incoming EDI (electronic data interchange) documents, and extract the necessary information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, UpdateTransformerCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, UpdateTransformerCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // UpdateTransformerRequest
 *   transformerId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   fileFormat: "XML" || "JSON",
 *   mappingTemplate: "STRING_VALUE",
 *   status: "active" || "inactive",
 *   ediType: { // EdiType Union: only one key present
 *     x12Details: { // X12Details
 *       transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_214" || "X12_215" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_820" || "X12_824" || "X12_830" || "X12_846" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_940" || "X12_990" || "X12_997",
 *       version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010",
 *     },
 *   },
 *   sampleDocument: "STRING_VALUE",
 * };
 * const command = new UpdateTransformerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTransformerResponse
 * //   transformerId: "STRING_VALUE", // required
 * //   transformerArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   fileFormat: "XML" || "JSON", // required
 * //   mappingTemplate: "STRING_VALUE", // required
 * //   status: "active" || "inactive", // required
 * //   ediType: { // EdiType Union: only one key present
 * //     x12Details: { // X12Details
 * //       transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_214" || "X12_215" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_820" || "X12_824" || "X12_830" || "X12_846" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_940" || "X12_990" || "X12_997",
 * //       version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010",
 * //     },
 * //   },
 * //   sampleDocument: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   modifiedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateTransformerCommandInput - {@link UpdateTransformerCommandInput}
 * @returns {@link UpdateTransformerCommandOutput}
 * @see {@link UpdateTransformerCommandInput} for command's `input` shape.
 * @see {@link UpdateTransformerCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when the calling command attempts to exceed one of the service quotas, for example trying to create a capability when you already have the maximum number of capabilities allowed.</p>
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
 * @example Sample UpdateTransformer call
 * ```javascript
 * //
 * const input = {
 *   "name": "transformJSON",
 *   "ediType": {
 *     "x12Details": {
 *       "version": "VERSION_4010",
 *       "transactionSet": "X12_110"
 *     }
 *   },
 *   "fileFormat": "JSON",
 *   "mappingTemplate": "{}",
 *   "sampleDocument": "s3://test-bucket/sampleDoc.txt",
 *   "status": "inactive",
 *   "transformerId": "tr-974c129999f84d8c9"
 * };
 * const command = new UpdateTransformerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "name": "transformJSON",
 *   "createdAt": "2023-11-01T21:51:05.504Z",
 *   "ediType": {
 *     "x12Details": {
 *       "version": "VERSION_4010",
 *       "transactionSet": "X12_110"
 *     }
 *   },
 *   "fileFormat": "JSON",
 *   "mappingTemplate": "$",
 *   "modifiedAt": "2023-11-01T21:51:05.504Z",
 *   "sampleDocument": "s3://test-bucket/sampleDoc.txt",
 *   "status": "inactive",
 *   "transformerArn": "arn:aws:b2bi:us-west-2:607686414464:transformer/tr-974c129999f84d8c9",
 *   "transformerId": "tr-974c129999f84d8c9"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class UpdateTransformerCommand extends $Command<
  UpdateTransformerCommandInput,
  UpdateTransformerCommandOutput,
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
  constructor(readonly input: UpdateTransformerCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: B2biClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTransformerCommandInput, UpdateTransformerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTransformerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "B2biClient";
    const commandName = "UpdateTransformerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "B2BI",
        operation: "UpdateTransformer",
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
  private serialize(input: UpdateTransformerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTransformerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTransformerCommandOutput> {
    return de_UpdateTransformerCommand(output, context);
  }
}
