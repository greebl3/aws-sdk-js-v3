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

import { HeadBucketOutput, HeadBucketRequest } from "../models/models_0";
import { de_HeadBucketCommand, se_HeadBucketCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link HeadBucketCommand}.
 */
export interface HeadBucketCommandInput extends HeadBucketRequest {}
/**
 * @public
 *
 * The output of {@link HeadBucketCommand}.
 */
export interface HeadBucketCommandOutput extends HeadBucketOutput, __MetadataBearer {}

/**
 * @public
 * <p>You can use this operation to determine if a bucket exists and if you have permission to access it. The action returns a <code>200 OK</code> if the bucket exists and you have permission
 *          to access it.</p>
 *          <p>If the bucket does not exist or you do not have permission to access it, the
 *             <code>HEAD</code> request returns a generic <code>400 Bad Request</code>, <code>403
 *             Forbidden</code> or <code>404 Not Found</code> code. A message body is not included, so
 *          you cannot determine the exception beyond these error codes.</p>
 *          <note>
 *             <p>
 *                <b>Directory buckets </b> - You must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format <code>https://<i>bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com</code>. Path-style requests are not supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-Regions-and-Zones.html">Regional and Zonal endpoints</a> in the
 *     <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <dl>
 *             <dt>Authentication and authorization</dt>
 *             <dd>
 *                <p>All <code>HeadBucket</code> requests must be authenticated and signed by using IAM credentials (access key ID and secret access key for the IAM identities). All headers with the <code>x-amz-</code> prefix, including
 *                         <code>x-amz-copy-source</code>, must be signed. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a>.</p>
 *                <p>
 *                   <b>Directory bucket</b> - You must use IAM credentials to authenticate and authorize your access to the <code>HeadBucket</code> API operation, instead of using the
 *                   temporary security credentials through the <code>CreateSession</code> API operation.</p>
 *                <p>Amazon Web Services CLI or SDKs handles authentication and authorization on your behalf.</p>
 *             </dd>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p></p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>General purpose bucket permissions</b> - To use this operation, you must have permissions to perform the
 *                         <code>s3:ListBucket</code> action. The bucket owner has this permission by default and
 *                         can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing
 *                            access permissions to your Amazon S3 resources</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Directory bucket permissions</b> -
 *                         You must have the <b>
 *                            <code>s3express:CreateSession</code>
 *                         </b> permission in the
 *                            <code>Action</code> element of a policy. By default, the session is in the <code>ReadWrite</code> mode. If you want to restrict the access, you can explicitly set the <code>s3express:SessionMode</code> condition key to <code>ReadOnly</code> on the bucket.</p>
 *                      <p>For more information about example bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-example-bucket-policies.html">Example bucket policies for S3 Express One Zone</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam-identity-policies.html">Amazon Web Services Identity and Access Management (IAM) identity-based policies for S3 Express One Zone</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is <code>
 *                      <i>Bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com</code>.</p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, HeadBucketCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, HeadBucketCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // HeadBucketRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new HeadBucketCommand(input);
 * const response = await client.send(command);
 * // { // HeadBucketOutput
 * //   BucketLocationType: "AvailabilityZone",
 * //   BucketLocationName: "STRING_VALUE",
 * //   BucketRegion: "STRING_VALUE",
 * //   AccessPointAlias: true || false,
 * // };
 *
 * ```
 *
 * @param HeadBucketCommandInput - {@link HeadBucketCommandInput}
 * @returns {@link HeadBucketCommandOutput}
 * @see {@link HeadBucketCommandInput} for command's `input` shape.
 * @see {@link HeadBucketCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NotFound} (client fault)
 *  <p>The specified content does not exist.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To determine if bucket exists
 * ```javascript
 * // This operation checks to see if a bucket exists.
 * const input = {
 *   "Bucket": "acl1"
 * };
 * const command = new HeadBucketCommand(input);
 * await client.send(command);
 * // example id: to-determine-if-bucket-exists-1473110292262
 * ```
 *
 */
export class HeadBucketCommand extends $Command<
  HeadBucketCommandInput,
  HeadBucketCommandOutput,
  S3ClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      Bucket: { type: "contextParams", name: "Bucket" },
      ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
      Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
      DisableS3ExpressSessionAuth: { type: "clientContextParams", name: "disableS3ExpressSessionAuth" },
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: HeadBucketCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<HeadBucketCommandInput, HeadBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, HeadBucketCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "HeadBucketCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "HeadBucket",
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
  private serialize(input: HeadBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_HeadBucketCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<HeadBucketCommandOutput> {
    return de_HeadBucketCommand(output, context);
  }
}
