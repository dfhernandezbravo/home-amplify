import { Campaigns } from '@/domain/entities/aws-personalize/aws-personalize.entity';
import getRemoteConfigAwsPersonalize from '@/domain/use-cases/aws-personalize/get-remote-config-aws';
import { useAppDispatch } from '@/presentation/hooks/storeHooks';
import AwsPersonalize from '@/presentation/modules/AwsPersonalize';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect } from 'react';

interface ParsedUrlQueryForPage extends ParsedUrlQuery {
  campaignName: Campaigns;
  title: string;
}

const AwsPersonalizePage: NextPage = () => {
  const { query } = useRouter();
  const { campaignName, title } = query as ParsedUrlQueryForPage;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRemoteConfigAwsPersonalize());
  }, [dispatch]);

  if (!campaignName || !title) return <div>Invalid Params</div>;

  return <AwsPersonalize campaignName={campaignName} title={title} />;
};

export default AwsPersonalizePage;
