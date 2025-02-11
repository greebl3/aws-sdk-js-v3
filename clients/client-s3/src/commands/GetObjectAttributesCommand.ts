// smithy-typescript generated code
import { getSsecPlugin } from "@aws-sdk/middleware-ssec";
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
  GetObjectAttributesOutput,
  GetObjectAttributesRequest,
  GetObjectAttributesRequestFilterSensitiveLog,
} from "../models/models_0";
import { de_GetObjectAttributesCommand, se_GetObjectAttributesCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetObjectAttributesCommand}.
 */
export interface GetObjectAttributesCommandInput extends GetObjectAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectAttributesCommand}.
 */
export interface GetObjectAttributesCommandOutput extends GetObjectAttributesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves all the metadata from an object without returning the object itself. This
 *          operation is useful if you're interested only in an object's metadata. </p>
 *          <p>
 *             <code>GetObjectAttributes</code> combines the functionality of <code>HeadObject</code>
 *          and <code>ListParts</code>. All of the data returned with each of those individual calls
 *          can be returned with a single call to <code>GetObjectAttributes</code>.</p>
 *          <note>
 *             <p>
 *                <b>Directory buckets</b> -  For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format <code>https://<i>bucket_name</i>.s3express-<i>az_id</i>.<i>region</i>.amazonaws.com/<i>key-name</i>
 *                </code>. Path-style requests are not supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-Regions-and-Zones.html">Regional and Zonal endpoints</a> in the
 *     <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>General purpose bucket permissions</b> - To use
 *                         <code>GetObjectAttributes</code>, you must have READ access to the object. The permissions that you need to use this operation with depend on whether the
 *                         bucket is versioned. If the bucket is versioned, you need both the
 *                         <code>s3:GetObjectVersion</code> and <code>s3:GetObjectVersionAttributes</code>
 *                         permissions for this operation. If the bucket is not versioned, you need the
 *                         <code>s3:GetObject</code> and <code>s3:GetObjectAttributes</code> permissions.
 *                         For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html">Specifying Permissions in
 *                            a Policy</a> in the <i>Amazon S3 User Guide</i>. If the object
 *                         that you request does not exist, the error Amazon S3 returns depends on whether you
 *                         also have the <code>s3:ListBucket</code> permission.</p>
 *                      <ul>
 *                         <li>
 *                            <p>If you have the <code>s3:ListBucket</code> permission on the bucket, Amazon S3
 *                               returns an HTTP status code <code>404 Not Found</code> ("no such key")
 *                               error.</p>
 *                         </li>
 *                         <li>
 *                            <p>If you don't have the <code>s3:ListBucket</code> permission, Amazon S3 returns
 *                               an HTTP status code <code>403 Forbidden</code> ("access denied")
 *                               error.</p>
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
 *             <dt>Encryption</dt>
 *             <dd>
 *                <note>
 *                   <p>Encryption request headers, like <code>x-amz-server-side-encryption</code>,
 *                   should not be sent for <code>HEAD</code> requests if your object uses server-side
 *                   encryption with Key Management Service (KMS) keys (SSE-KMS), dual-layer server-side
 *                   encryption with Amazon Web Services KMS keys (DSSE-KMS), or server-side encryption with Amazon S3
 *                   managed encryption keys (SSE-S3). The <code>x-amz-server-side-encryption</code> header is used when you <code>PUT</code> an object to S3 and want to specify the encryption method.
 *                   If you include this header in a <code>GET</code> request for an object that uses these types of keys,
 *                   you’ll get an HTTP <code>400 Bad Request</code> error. It's because the encryption method can't be changed when you retrieve the object.</p>
 *                </note>
 *                <p>If you encrypt an object by using server-side encryption with customer-provided
 *                   encryption keys (SSE-C) when you store the object in Amazon S3, then when you retrieve the
 *                   metadata from the object, you must use the following headers to provide the encryption key for the server to be able to retrieve the object's metadata. The headers are: </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-server-side-encryption-customer-algorithm</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-server-side-encryption-customer-key</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-server-side-encryption-customer-key-MD5</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *                <p>For more information about SSE-C, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption
 *                   (Using Customer-Provided Encryption Keys)</a> in the <i>Amazon S3
 *                      User Guide</i>.</p>
 *                <note>
 *                   <p>
 *                      <b>Directory bucket permissions</b> - For directory buckets, only server-side encryption with Amazon S3 managed keys (SSE-S3) (<code>AES256</code>) is supported.</p>
 *                </note>
 *             </dd>
 *             <dt>Versioning</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets</b> - S3 Versioning isn't enabled and supported for directory buckets. For this API operation, only the <code>null</code> value of the version ID is supported by directory buckets. You can only specify <code>null</code>
 *                         to the <code>versionId</code> query parameter in the request.</p>
 *             </dd>
 *             <dt>Conditional request headers</dt>
 *             <dd>
 *                <p>Consider the following when using request headers:</p>
 *                <ul>
 *                   <li>
 *                      <p>If both of the <code>If-Match</code> and <code>If-Unmodified-Since</code> headers
 *                         are present in the request as follows, then Amazon S3 returns the HTTP status code
 *                         <code>200 OK</code> and the data requested:</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>If-Match</code> condition evaluates to <code>true</code>.</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>If-Unmodified-Since</code> condition evaluates to
 *                               <code>false</code>.</p>
 *                         </li>
 *                      </ul>
 *                      <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>.</p>
 *                   </li>
 *                   <li>
 *                      <p>If both of the <code>If-None-Match</code> and <code>If-Modified-Since</code>
 *                         headers are present in the request as follows, then Amazon S3 returns the HTTP status code
 *                         <code>304 Not Modified</code>:</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>If-None-Match</code> condition evaluates to <code>false</code>.</p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>If-Modified-Since</code> condition evaluates to
 *                               <code>true</code>.</p>
 *                         </li>
 *                      </ul>
 *                      <p>For more information about conditional requests, see <a href="https://tools.ietf.org/html/rfc7232">RFC 7232</a>.</p>
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
 *          <p>The following actions are related to <code>GetObjectAttributes</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectAcl.html">GetObjectAcl</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLegalHold.html">GetObjectLegalHold</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectLockConfiguration.html">GetObjectLockConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectRetention.html">GetObjectRetention</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_HeadObject.html">HeadObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListParts.html">ListParts</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectAttributesCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectAttributesCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // GetObjectAttributesRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   MaxParts: Number("int"),
 *   PartNumberMarker: "STRING_VALUE",
 *   SSECustomerAlgorithm: "STRING_VALUE",
 *   SSECustomerKey: "STRING_VALUE",
 *   SSECustomerKeyMD5: "STRING_VALUE",
 *   RequestPayer: "requester",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   ObjectAttributes: [ // ObjectAttributesList // required
 *     "ETag" || "Checksum" || "ObjectParts" || "StorageClass" || "ObjectSize",
 *   ],
 * };
 * const command = new GetObjectAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectAttributesOutput
 * //   DeleteMarker: true || false,
 * //   LastModified: new Date("TIMESTAMP"),
 * //   VersionId: "STRING_VALUE",
 * //   RequestCharged: "requester",
 * //   ETag: "STRING_VALUE",
 * //   Checksum: { // Checksum
 * //     ChecksumCRC32: "STRING_VALUE",
 * //     ChecksumCRC32C: "STRING_VALUE",
 * //     ChecksumSHA1: "STRING_VALUE",
 * //     ChecksumSHA256: "STRING_VALUE",
 * //   },
 * //   ObjectParts: { // GetObjectAttributesParts
 * //     TotalPartsCount: Number("int"),
 * //     PartNumberMarker: "STRING_VALUE",
 * //     NextPartNumberMarker: "STRING_VALUE",
 * //     MaxParts: Number("int"),
 * //     IsTruncated: true || false,
 * //     Parts: [ // PartsList
 * //       { // ObjectPart
 * //         PartNumber: Number("int"),
 * //         Size: Number("long"),
 * //         ChecksumCRC32: "STRING_VALUE",
 * //         ChecksumCRC32C: "STRING_VALUE",
 * //         ChecksumSHA1: "STRING_VALUE",
 * //         ChecksumSHA256: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   StorageClass: "STANDARD" || "REDUCED_REDUNDANCY" || "STANDARD_IA" || "ONEZONE_IA" || "INTELLIGENT_TIERING" || "GLACIER" || "DEEP_ARCHIVE" || "OUTPOSTS" || "GLACIER_IR" || "SNOW" || "EXPRESS_ONEZONE",
 * //   ObjectSize: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetObjectAttributesCommandInput - {@link GetObjectAttributesCommandInput}
 * @returns {@link GetObjectAttributesCommandOutput}
 * @see {@link GetObjectAttributesCommandInput} for command's `input` shape.
 * @see {@link GetObjectAttributesCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link NoSuchKey} (client fault)
 *  <p>The specified key does not exist.</p>
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export class GetObjectAttributesCommand extends $Command<
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
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
  constructor(readonly input: GetObjectAttributesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetObjectAttributesCommandInput, GetObjectAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetObjectAttributesCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getSsecPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetObjectAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetObjectAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonS3",
        operation: "GetObjectAttributes",
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
  private serialize(input: GetObjectAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetObjectAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetObjectAttributesCommandOutput> {
    return de_GetObjectAttributesCommand(output, context);
  }
}
