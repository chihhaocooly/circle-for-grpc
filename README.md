# template-grpc-nodejs

## 本地伺服器啟動方式
    1. npm i
    2. npm run build
    3. npm start

## 編譯proto的方法
    1.protoc \
    --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts_proto" \
    --proto_path="./src/protos" \
    --js_out="import_style=commonjs,binary:./src/protos" \
    --ts_out="./src/protos" \
    action.proto

    2.會產生以下內容
    .
    ├── src
        ├── protos
            ├── action.proto
            ├── action.ts
            └── action_pb.js
    
    3.產生reflection所需要檔案，此檔案可以讓postman偵測到grpc所擁有的方法
    protoc \
    --descriptor_set_out=./src/protos/descriptor_set.bin  \
    --include_imports \
    ./src/protos/action.proto

    4.執行完2.，會產生以下內容
    .
    ├── src
        ├── protos
            ├── descriptor_set.bin
