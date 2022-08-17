#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { ManagedMsadStack } from "../lib/managed-msad-stack";

const app = new cdk.App();
new ManagedMsadStack(app, "ManagedMsadStack");
