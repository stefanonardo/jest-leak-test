import { DeleteRuleCommand } from "@aws-sdk/client-eventbridge";
import { CreateKeyPairCommand } from "@aws-sdk/client-ec2";
import { FilterLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs";
import { SendMessageCommand } from "@aws-sdk/client-sqs";
import { TerminateJobFlowsCommand } from "@aws-sdk/client-emr";
import { ListClustersCommand } from "@aws-sdk/client-ecs";
import { BatchGetImageCommand } from "@aws-sdk/client-ecr";

export const testFoo = () => {
  const cmd: unknown = undefined as unknown;

  if (cmd instanceof DeleteRuleCommand) {
    return;
  }
  if (cmd instanceof FilterLogEventsCommand) {
    return;
  }
  if (cmd instanceof ListClustersCommand) {
    return;
  }
  if (cmd instanceof BatchGetImageCommand) {
    return;
  }
  if (cmd instanceof CreateKeyPairCommand) {
    return;
  }
  if (cmd instanceof TerminateJobFlowsCommand) {
    return;
  }
  if (cmd instanceof SendMessageCommand) {
    return;
  }
};
