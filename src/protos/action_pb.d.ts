import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Item extends jspb.Message {
  getName(): string;
  setName(value: string): Item;

  getPrice(): number;
  setPrice(value: number): Item;

  getMessage(): string;
  setMessage(value: string): Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    name: string,
    price: number,
    message: string,
  }
}

export class List extends jspb.Message {
  getItemsList(): Array<Item>;
  setItemsList(value: Array<Item>): List;
  clearItemsList(): List;
  addItems(value?: Item, index?: number): Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): List.AsObject;
  static toObject(includeInstance: boolean, msg: List): List.AsObject;
  static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): List;
  static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
}

export namespace List {
  export type AsObject = {
    itemsList: Array<Item.AsObject>,
  }
}

export class Filter extends jspb.Message {
  getName(): string;
  setName(value: string): Filter;

  getPrice(): number;
  setPrice(value: number): Filter;

  getOpstr(): string;
  setOpstr(value: string): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    name: string,
    price: number,
    opstr: string,
  }
}

export class Member extends jspb.Message {
  getName(): string;
  setName(value: string): Member;

  getType(): number;
  setType(value: number): Member;

  getTimestamp(): string;
  setTimestamp(value: string): Member;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    name: string,
    type: number,
    timestamp: string,
  }
}

export class Log extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): Log;

  getAction(): string;
  setAction(value: string): Log;

  getLabel(): string;
  setLabel(value: string): Log;

  getValue(): string;
  setValue(value: string): Log;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Log.AsObject;
  static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
  static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Log;
  static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
  export type AsObject = {
    category: string,
    action: string,
    label: string,
    value: string,
  }
}

export class CircleInfo extends jspb.Message {
  getColorcode(): string;
  setColorcode(value: string): CircleInfo;

  getX(): number;
  setX(value: number): CircleInfo;

  getY(): number;
  setY(value: number): CircleInfo;

  getIsfinish(): boolean;
  setIsfinish(value: boolean): CircleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CircleInfo): CircleInfo.AsObject;
  static serializeBinaryToWriter(message: CircleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleInfo;
  static deserializeBinaryFromReader(message: CircleInfo, reader: jspb.BinaryReader): CircleInfo;
}

export namespace CircleInfo {
  export type AsObject = {
    colorcode: string,
    x: number,
    y: number,
    isfinish: boolean,
  }
}

export class CircleInfoList extends jspb.Message {
  getCircleinfosList(): Array<CircleInfo>;
  setCircleinfosList(value: Array<CircleInfo>): CircleInfoList;
  clearCircleinfosList(): CircleInfoList;
  addCircleinfos(value?: CircleInfo, index?: number): CircleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleInfoList.AsObject;
  static toObject(includeInstance: boolean, msg: CircleInfoList): CircleInfoList.AsObject;
  static serializeBinaryToWriter(message: CircleInfoList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleInfoList;
  static deserializeBinaryFromReader(message: CircleInfoList, reader: jspb.BinaryReader): CircleInfoList;
}

export namespace CircleInfoList {
  export type AsObject = {
    circleinfosList: Array<CircleInfo.AsObject>,
  }
}

