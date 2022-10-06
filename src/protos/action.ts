/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "AiiiGRPC";

export interface CircleInfo {
  colorCode: string;
  x: number;
  y: number;
  isFinish: boolean;
}

export interface CircleInfoList {
  circleInfos: CircleInfo[];
}

function createBaseCircleInfo(): CircleInfo {
  return { colorCode: "", x: 0, y: 0, isFinish: false };
}

export const CircleInfo = {
  encode(message: CircleInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.colorCode !== "") {
      writer.uint32(10).string(message.colorCode);
    }
    if (message.x !== 0) {
      writer.uint32(16).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).int32(message.y);
    }
    if (message.isFinish === true) {
      writer.uint32(32).bool(message.isFinish);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CircleInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircleInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.colorCode = reader.string();
          break;
        case 2:
          message.x = reader.int32();
          break;
        case 3:
          message.y = reader.int32();
          break;
        case 4:
          message.isFinish = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CircleInfo {
    return {
      colorCode: isSet(object.colorCode) ? String(object.colorCode) : "",
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      isFinish: isSet(object.isFinish) ? Boolean(object.isFinish) : false,
    };
  },

  toJSON(message: CircleInfo): unknown {
    const obj: any = {};
    message.colorCode !== undefined && (obj.colorCode = message.colorCode);
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.isFinish !== undefined && (obj.isFinish = message.isFinish);
    return obj;
  },

  fromPartial(object: DeepPartial<CircleInfo>): CircleInfo {
    const message = createBaseCircleInfo();
    message.colorCode = object.colorCode ?? "";
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.isFinish = object.isFinish ?? false;
    return message;
  },
};

function createBaseCircleInfoList(): CircleInfoList {
  return { circleInfos: [] };
}

export const CircleInfoList = {
  encode(message: CircleInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.circleInfos) {
      CircleInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CircleInfoList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircleInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.circleInfos.push(CircleInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CircleInfoList {
    return {
      circleInfos: Array.isArray(object?.circleInfos) ? object.circleInfos.map((e: any) => CircleInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: CircleInfoList): unknown {
    const obj: any = {};
    if (message.circleInfos) {
      obj.circleInfos = message.circleInfos.map((e) => e ? CircleInfo.toJSON(e) : undefined);
    } else {
      obj.circleInfos = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CircleInfoList>): CircleInfoList {
    const message = createBaseCircleInfoList();
    message.circleInfos = object.circleInfos?.map((e) => CircleInfo.fromPartial(e)) || [];
    return message;
  },
};

export type ToDoServiceDefinition = typeof ToDoServiceDefinition;
export const ToDoServiceDefinition = {
  name: "ToDoService",
  fullName: "AiiiGRPC.ToDoService",
  methods: {
    bidiCircleInfoData: {
      name: "BidiCircleInfoData",
      requestType: CircleInfo,
      requestStream: true,
      responseType: CircleInfoList,
      responseStream: true,
      options: {},
    },
    unaryCircleInfoData: {
      name: "UnaryCircleInfoData",
      requestType: CircleInfo,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    serverStreamCircleInfoData: {
      name: "ServerStreamCircleInfoData",
      requestType: CircleInfo,
      requestStream: false,
      responseType: CircleInfoList,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface ToDoServiceServiceImplementation<CallContextExt = {}> {
  bidiCircleInfoData(
    request: AsyncIterable<CircleInfo>,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<CircleInfoList>>;
  unaryCircleInfoData(request: CircleInfo, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  serverStreamCircleInfoData(
    request: CircleInfo,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<CircleInfoList>>;
}

export interface ToDoServiceClient<CallOptionsExt = {}> {
  bidiCircleInfoData(
    request: AsyncIterable<DeepPartial<CircleInfo>>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<CircleInfoList>;
  unaryCircleInfoData(request: DeepPartial<CircleInfo>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  serverStreamCircleInfoData(
    request: DeepPartial<CircleInfo>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<CircleInfoList>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
