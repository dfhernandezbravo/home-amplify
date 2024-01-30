import { Campaigns } from '@/domain/entities/aws-personalize/aws-personalize.entity';
import AwsPersonalize from '@/presentation/modules/aws-personalize';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

interface ParsedUrlQueryForPage extends ParsedUrlQuery {
  campaignName: Campaigns;
  title: string;
}

const AwsPersonalizePage: NextPage = () => {
  const { query } = useRouter();
  const { campaignName, title } = query as ParsedUrlQueryForPage;

  if (!campaignName || !title) return <div>Invalid Params</div>;

  return <AwsPersonalize campaignName={campaignName} title={title} />;
};

export default AwsPersonalizePage;
