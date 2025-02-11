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

import { DeleteObjectOutput, DeleteObjectRequest } from "../models/models_0";
import { de_DeleteObjectCommand, se_DeleteObjectCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteObjectCommand}.
 */
export interface DeleteObjectCommandInput extends DeleteObjectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteObjectCommand}.
 */
export interface DeleteObjectCommandOutput extends DeleteObjectOutput, __MetadataBearer {}

/**
 * @public
 * <p>Removes an object from a bucket. The behavior depends on the bucket's versioning state: </p>
 *          <ul>
 *             <li>
 *                <p>If versioning is enabled, the operation removes the null version (if there is one) of an object and inserts a delete marker,
 *             which becomes the latest version of the object. If there isn't a null version, Amazon S3 does
 *             not remove any objects but will still respond that the command was successful.</p>
 *             </li>
 *             <li>
 *                <p>If versioning is suspended or not enabled, the operation permanently deletes the object.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <b>Directory buckets</b> - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the <code>null</code> value of the version ID is supported by directory buckets. You can only specify <code>null</code>
 *                to the <code>versionId</code> query parameter in the request.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>Directory buckets</b> - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format <code>https://<i>bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com/<i>key-name</i>
 *                      </code>. Path-style requests are not supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-Regions-and-Zones.html">Regional and Zonal endpoints</a> in the
 *     <i>Amazon S3 User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>To remove a specific version, you must use the <code>versionId</code> query parameter. Using this
 *          query parameter permanently deletes the version. If the object deleted is a delete marker, Amazon S3
 *          sets the response header <code>x-amz-delete-marker</code> to true. </p>
 *          <p>If the object you want to delete is in a bucket where the bucket versioning
 *          configuration is MFA Delete enabled, you must include the <code>x-amz-mfa</code> request
 *          header in the DELETE <code>versionId</code> request. Requests that include
 *          <code>x-amz-mfa</code> must use HTTPS. For more information about MFA Delete, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMFADelete.html">Using MFA Delete</a> in the <i>Amazon S3
 *                User Guide</i>. To see sample
 *          requests that use versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectDELETE.html#ExampleVersionObjectDelete">Sample
 *             Request</a>. </p>
 *          <note>
 *             <p>
 *                <b>Directory buckets</b> - MFA delete is not supported by directory buckets.</p>
 *          </note>
 *          <p>You can delete objects by explicitly calling DELETE Object or calling
 *          (<a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycle.html">PutBucketLifecycle</a>) to enable Amazon S3 to remove them for you. If you want to block
 *          users or accounts from removing or deleting objects from your bucket, you must deny them
 *          the <code>s3:DeleteObject</code>, <code>s3:DeleteObjectVersion</code>, and
 *          <code>s3:PutLifeCycleConfiguration</code> actions. </p>
 *          <note>
 *             <p>
 *                <b>Directory buckets</b> - S3 Lifecycle is not supported by directory buckets.</p>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>General purpose bucket permissions</b> - The following permissions are required in your policies when your
 *                         <code>DeleteObjects</code> request includes specific headers.</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <b>
 *                                  <code>s3:DeleteObject</code>
 *                               </b> - To delete an object from a bucket, you must always have the <code>s3:DeleteObject</code> permission.</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <b>
 *                                  <code>s3:DeleteObjectVersion</code>
 *                               </b> - To delete a specific version of an object from a versiong-enabled bucket, you must have the <code>s3:DeleteObjectVersion</code> permission.</p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Directory bucket permissions</b> - To grant access to this API operation on a directory bucket, we recommend that you use the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html">
 *                            <code>CreateSession</code>
 *                         </a> API operation for session-based authorization. Specifically, you grant the <code>s3express:CreateSession</code> permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the <code>CreateSession</code> API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another <code>CreateSession</code> API call to generate a new session token for use.
 * Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html">
 *                            <code>CreateSession</code>
 *                         </a>.</p>
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
 *          <p>The following action is related to <code>DeleteObject</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteObjectRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   MFA: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   BypassGovernanceRetention: true || false,
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteObjectCommand(input);
 * const response = await client.send(command);
 * // { // DeleteObjectOutput
 * //   DeleteMarker: true || false,
 * //   VersionId: "STRING_VALUE",
 * //   RequestCharged: "requester",
 * // };
 *
 * ```
 *
 * @param DeleteObjectCommandInput - {@link DeleteObjectCommandInput}
 * @returns {@link DeleteObjectCommandOutput}
 * @see {@link DeleteObjectCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @example To delete an object
 * ```javascript
 * // The following example deletes an object from an S3 bucket.
 * const input = {
 *   "Bucket": "examplebucket",
 *   "Key": "objectkey.jpg"
 * };
 * const command = new DeleteObjectCommand(input);
 * await client.send(command);
 * // example id: to-delete-an-object-1472850136595
 * ```
 *
 * @example To delete an object (from a non-versioned bucket)
 * ```javascript
 * // The following example deletes an object from a non-versioned bucket.
 * const input = {
 *   "Bucket": "ExampleBucket",
 *   "Key": "HappyFace.jpg"
 * };
 * const command = new DeleteObjectCommand(input);
 * await client.send(command);
 * // example id: to-delete-an-object-from-a-non-versioned-bucket-1481588533089
 * ```
 *
 */
export class DeleteObjectCommand extends $Command<
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
  S3ClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      Bucket: { type: "contextParams", name: "Bucket" },
      Key: { type: "contextParams", name: "Key" },
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
  constructor(readonly input: DeleteObjectCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteObjectCommandInput, DeleteObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteObjectCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "DeleteObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "DeleteObject",
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
  private serialize(input: DeleteObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteObjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteObjectCommandOutput> {
    return de_DeleteObjectCommand(output, context);
  }
}
