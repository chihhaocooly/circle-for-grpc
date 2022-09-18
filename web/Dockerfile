FROM envoyproxy/envoy:v1.22.0

WORKDIR /etc/envoy/
COPY ./envoy-cloud-run.yaml ./envoy.yaml
RUN chmod go+r /etc/envoy/envoy.yaml
ENV ENVOY_UID=0
EXPOSE 8080