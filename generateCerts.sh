#!/usr/bin/env bash

pushd ./ssl > /dev/null
mkcert -cert-file md-dashboard-cert.pem -key-file md-dashboard-key.pem localhost 127.0.0.1 ::1
popd > /dev/null
