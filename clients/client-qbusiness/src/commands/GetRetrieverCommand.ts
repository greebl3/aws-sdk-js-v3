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

import { GetRetrieverRequest, GetRetrieverResponse } from "../models/models_0";
import { de_GetRetrieverCommand, se_GetRetrieverCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRetrieverCommand}.
 */
export interface GetRetrieverCommandInput extends GetRetrieverRequest {}
/**
 * @public
 *
 * The output of {@link GetRetrieverCommand}.
 */
export interface GetRetrieverCommandOutput extends GetRetrieverResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about an existing retriever used by an Amazon Q
 *             application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetRetrieverCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetRetrieverCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // GetRetrieverRequest
 *   applicationId: "STRING_VALUE", // required
 *   retrieverId: "STRING_VALUE", // required
 * };
 * const command = new GetRetrieverCommand(input);
 * const response = await client.send(command);
 * // { // GetRetrieverResponse
 * //   applicationId: "STRING_VALUE",
 * //   retrieverId: "STRING_VALUE",
 * //   retrieverArn: "STRING_VALUE",
 * //   type: "NATIVE_INDEX" || "KENDRA_INDEX",
 * //   status: "CREATING" || "ACTIVE" || "FAILED",
 * //   displayName: "STRING_VALUE",
 * //   configuration: { // RetrieverConfiguration Union: only one key present
 * //     nativeIndexConfiguration: { // NativeIndexConfiguration
 * //       indexId: "STRING_VALUE", // required
 * //     },
 * //     kendraIndexConfiguration: { // KendraIndexConfiguration
 * //       indexId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   roleArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetRetrieverCommandInput - {@link GetRetrieverCommandInput}
 * @returns {@link GetRetrieverCommandOutput}
 * @see {@link GetRetrieverCommandInput} for command's `input` shape.
 * @see {@link GetRetrieverCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
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
export class GetRetrieverCommand extends $Command<
  GetRetrieverCommandInput,
  GetRetrieverCommandOutput,
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
  constructor(readonly input: GetRetrieverCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRetrieverCommandInput, GetRetrieverCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRetrieverCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QBusinessClient";
    const commandName = "GetRetrieverCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ExpertQ",
        operation: "GetRetriever",
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
  private serialize(input: GetRetrieverCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRetrieverCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRetrieverCommandOutput> {
    return de_GetRetrieverCommand(output, context);
  }
}
