/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Empty } from "../../google/protobuf/empty";
import { map } from "rxjs/operators";

export const protobufPackage = "AiiiGRPC";

export interface Item {
  name: string;
  price: number;
  message: string;
}

export interface List {
  items: Item[];
}

export interface Filter {
  name: string;
  price: number;
  opStr: string;
}

/** member */
export interface Member {
  name: string;
  type: number;
  timestamp: string;
}

export interface Log {
  category: string;
  action: string;
  label: string;
  value: string;
}

export interface CircleInfo {
  colorCode: string;
  x: number;
  y: number;
  isFinish: boolean;
}

export interface CircleInfoList {
  circleInfos: CircleInfo[];
}

function createBaseItem(): Item {
  return { name: "", price: 0, message: "" };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.price !== 0) {
      writer.uint32(16).int32(message.price);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.price = reader.int32();
          break;
        case 3:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Item {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = Math.round(message.price));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Item>, I>>(object: I): Item {
    const message = createBaseItem();
    message.name = object.name ?? "";
    message.price = object.price ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseList(): List {
  return { items: [] };
}

export const List = {
  encode(message: List, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): List {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): List {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Item.fromJSON(e))
        : [],
    };
  },

  toJSON(message: List): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Item.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<List>, I>>(object: I): List {
    const message = createBaseList();
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFilter(): Filter {
  return { name: "", price: 0, opStr: "" };
}

export const Filter = {
  encode(
    message: Filter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.price !== 0) {
      writer.uint32(16).int32(message.price);
    }
    if (message.opStr !== "") {
      writer.uint32(26).string(message.opStr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.price = reader.int32();
          break;
        case 3:
          message.opStr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filter {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      opStr: isSet(object.opStr) ? String(object.opStr) : "",
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = Math.round(message.price));
    message.opStr !== undefined && (obj.opStr = message.opStr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
    const message = createBaseFilter();
    message.name = object.name ?? "";
    message.price = object.price ?? 0;
    message.opStr = object.opStr ?? "";
    return message;
  },
};

function createBaseMember(): Member {
  return { name: "", type: 0, timestamp: "" };
}

export const Member = {
  encode(
    message: Member,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.timestamp !== "") {
      writer.uint32(26).string(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.int32();
          break;
        case 3:
          message.timestamp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Member {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? Number(object.type) : 0,
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
    };
  },

  toJSON(message: Member): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Member>, I>>(object: I): Member {
    const message = createBaseMember();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    message.timestamp = object.timestamp ?? "";
    return message;
  },
};

function createBaseLog(): Log {
  return { category: "", action: "", label: "", value: "" };
}

export const Log = {
  encode(message: Log, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.category !== "") {
      writer.uint32(10).string(message.category);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    if (message.label !== "") {
      writer.uint32(26).string(message.label);
    }
    if (message.value !== "") {
      writer.uint32(34).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Log {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = reader.string();
          break;
        case 2:
          message.action = reader.string();
          break;
        case 3:
          message.label = reader.string();
          break;
        case 4:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Log {
    return {
      category: isSet(object.category) ? String(object.category) : "",
      action: isSet(object.action) ? String(object.action) : "",
      label: isSet(object.label) ? String(object.label) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Log): unknown {
    const obj: any = {};
    message.category !== undefined && (obj.category = message.category);
    message.action !== undefined && (obj.action = message.action);
    message.label !== undefined && (obj.label = message.label);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Log>, I>>(object: I): Log {
    const message = createBaseLog();
    message.category = object.category ?? "";
    message.action = object.action ?? "";
    message.label = object.label ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCircleInfo(): CircleInfo {
  return { colorCode: "", x: 0, y: 0, isFinish: false };
}

export const CircleInfo = {
  encode(
    message: CircleInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  fromPartial<I extends Exact<DeepPartial<CircleInfo>, I>>(
    object: I
  ): CircleInfo {
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
  encode(
    message: CircleInfoList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      circleInfos: Array.isArray(object?.circleInfos)
        ? object.circleInfos.map((e: any) => CircleInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CircleInfoList): unknown {
    const obj: any = {};
    if (message.circleInfos) {
      obj.circleInfos = message.circleInfos.map((e) =>
        e ? CircleInfo.toJSON(e) : undefined
      );
    } else {
      obj.circleInfos = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CircleInfoList>, I>>(
    object: I
  ): CircleInfoList {
    const message = createBaseCircleInfoList();
    message.circleInfos =
      object.circleInfos?.map((e) => CircleInfo.fromPartial(e)) || [];
    return message;
  },
};

export interface ToDoService {
  UnaryAddItem(request: Item): Promise<List>;
  ClientStreamingAddItem(request: Observable<Item>): Promise<Empty>;
  ServerStreamingSubList(request: Filter): Observable<Item>;
  BidirectionalStreamingAsyncList(request: Observable<Item>): Observable<Item>;
  UnaryAddMemberRecord(request: Member): Promise<Empty>;
  ClientStreamingAddLog(request: Observable<Log>): Promise<Empty>;
  ServerStreamingSubMemberRecord(request: Empty): Observable<Member>;
  BidiCircleInfoData(
    request: Observable<CircleInfo>
  ): Observable<CircleInfoList>;
}

export class ToDoServiceClientImpl implements ToDoService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UnaryAddItem = this.UnaryAddItem.bind(this);
    this.ClientStreamingAddItem = this.ClientStreamingAddItem.bind(this);
    this.ServerStreamingSubList = this.ServerStreamingSubList.bind(this);
    this.BidirectionalStreamingAsyncList =
      this.BidirectionalStreamingAsyncList.bind(this);
    this.UnaryAddMemberRecord = this.UnaryAddMemberRecord.bind(this);
    this.ClientStreamingAddLog = this.ClientStreamingAddLog.bind(this);
    this.ServerStreamingSubMemberRecord =
      this.ServerStreamingSubMemberRecord.bind(this);
    this.BidiCircleInfoData = this.BidiCircleInfoData.bind(this);
  }
  UnaryAddItem(request: Item): Promise<List> {
    const data = Item.encode(request).finish();
    const promise = this.rpc.request(
      "AiiiGRPC.ToDoService",
      "UnaryAddItem",
      data
    );
    return promise.then((data) => List.decode(new _m0.Reader(data)));
  }

  ClientStreamingAddItem(request: Observable<Item>): Promise<Empty> {
    const data = request.pipe(map((request) => Item.encode(request).finish()));
    const promise = this.rpc.clientStreamingRequest(
      "AiiiGRPC.ToDoService",
      "ClientStreamingAddItem",
      data
    );
    return promise.then((data) => Empty.decode(new _m0.Reader(data)));
  }

  ServerStreamingSubList(request: Filter): Observable<Item> {
    const data = Filter.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "AiiiGRPC.ToDoService",
      "ServerStreamingSubList",
      data
    );
    return result.pipe(map((data) => Item.decode(new _m0.Reader(data))));
  }

  BidirectionalStreamingAsyncList(request: Observable<Item>): Observable<Item> {
    const data = request.pipe(map((request) => Item.encode(request).finish()));
    const result = this.rpc.bidirectionalStreamingRequest(
      "AiiiGRPC.ToDoService",
      "BidirectionalStreamingAsyncList",
      data
    );
    return result.pipe(map((data) => Item.decode(new _m0.Reader(data))));
  }

  UnaryAddMemberRecord(request: Member): Promise<Empty> {
    const data = Member.encode(request).finish();
    const promise = this.rpc.request(
      "AiiiGRPC.ToDoService",
      "UnaryAddMemberRecord",
      data
    );
    return promise.then((data) => Empty.decode(new _m0.Reader(data)));
  }

  ClientStreamingAddLog(request: Observable<Log>): Promise<Empty> {
    const data = request.pipe(map((request) => Log.encode(request).finish()));
    const promise = this.rpc.clientStreamingRequest(
      "AiiiGRPC.ToDoService",
      "ClientStreamingAddLog",
      data
    );
    return promise.then((data) => Empty.decode(new _m0.Reader(data)));
  }

  ServerStreamingSubMemberRecord(request: Empty): Observable<Member> {
    const data = Empty.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "AiiiGRPC.ToDoService",
      "ServerStreamingSubMemberRecord",
      data
    );
    return result.pipe(map((data) => Member.decode(new _m0.Reader(data))));
  }

  BidiCircleInfoData(
    request: Observable<CircleInfo>
  ): Observable<CircleInfoList> {
    const data = request.pipe(
      map((request) => CircleInfo.encode(request).finish())
    );
    const result = this.rpc.bidirectionalStreamingRequest(
      "AiiiGRPC.ToDoService",
      "BidiCircleInfoData",
      data
    );
    return result.pipe(
      map((data) => CircleInfoList.decode(new _m0.Reader(data)))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
  clientStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Promise<Uint8Array>;
  serverStreamingRequest(
    service: string,
    method: string,
    data: Uint8Array
  ): Observable<Uint8Array>;
  bidirectionalStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Observable<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
