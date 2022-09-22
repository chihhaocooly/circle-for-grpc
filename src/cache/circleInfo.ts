import { Subject } from "rxjs";
import { CircleInfo } from "../protos/action";

export const newCircleInfos: CircleInfo[] = [];

export const newCircleInfoSubject = new Subject<CircleInfo>();
