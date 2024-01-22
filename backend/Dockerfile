# STEP 1 prepare build env
FROM golang@sha256:276692412aea6f9dd6cdc5725b2f1c05bef8df7223811afbc6aa16294e2903f9 as builder

RUN apk update && apk add --no-cache git ca-certificates tzdata && update-ca-certificates

WORKDIR /src
COPY main.go go.mod go.sum .env ./

RUN go mod download
RUN go mod verify
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o /bin/ide-backend .

# STEP 2 prepare final image
FROM scratch

COPY --from=builder /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

COPY .env ./
COPY --from=builder /bin/ide-backend /ide-backend

ENTRYPOINT ["/ide-backend"]
