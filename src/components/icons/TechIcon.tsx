import { AngularIcon } from './AngularIcon';
import { ExpressIcon } from './ExpressIcon';
import { GoogleCloudIcon } from './GoogleCloudIcon';
import { JestIcon } from './JestIcon';
import { JiraIcon } from './JiraIcon';
import { MongodbIcon } from './MongodbIcon';
import { NestjsIcon } from './NestjsIcon';
import { NextjsIcon } from './NextjsIcon';
import { NodejsIcon } from './NodejsIcon';
import { NotionIcon } from './NotionIcon';
import { ReactIcon } from './ReactIcon';
import { SupabaseIcon } from './SupabaseIcon';
import { TypescriptIcon } from './TypescriptIcon';

const icons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  angular: AngularIcon,
  express: ExpressIcon,
  googlecloud: GoogleCloudIcon,
  jest: JestIcon,
  jira: JiraIcon,
  mongodb: MongodbIcon,
  nestjs: NestjsIcon,
  nextjs: NextjsIcon,
  nodejs: NodejsIcon,
  notion: NotionIcon,
  react: ReactIcon,
  supabase: SupabaseIcon,
  typescript: TypescriptIcon,
};

export const TechIcon = ({ name, ...props }: { name: string } & React.SVGProps<SVGSVGElement>) => {
  const Icon = icons[name.toLowerCase()];
  if (!Icon) return null;
  return <Icon {...props} />;
};
