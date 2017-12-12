import * as __aws_middleware_content_length from '@aws/middleware-content-length';
import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as __aws_util_body_length_node from '@aws/util-body-length-node';
import * as _stream from 'stream';
import {EnableKey} from '../model/EnableKey';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {EnableKeyInput} from '../types/EnableKeyInput';
import {EnableKeyOutput} from '../types/EnableKeyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';

export class EnableKeyCommand implements __aws_types.Command<
    InputTypesUnion,
    EnableKeyInput,
    OutputTypesUnion,
    EnableKeyOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<EnableKeyInput, EnableKeyOutput, _stream.Readable>();

    constructor(readonly input: EnableKeyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_types.Handler<EnableKeyInput, EnableKeyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: EnableKey
        };

        const contentLengthTag = new Set();
        contentLengthTag.add('SET_CONTENT_LENGTH');
        stack.add(
            __aws_middleware_content_length.contentLengthMiddleware(
                __aws_util_body_length_node.calculateBodyLength
            ),
            {
                step: 'build',
                tags: contentLengthTag,
                priority: -80
            }
        );

        return stack.resolve(
            handler<EnableKeyInput, EnableKeyOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}