import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { ImmunizationRecommendation } from '../../core/models/ImmunizationRecommendation';
import { useMapper } from '../../core/services/resourceMapper/ResourceMapperContext';

export function Overview() {
  const mapper = useMapper();
  const recommendations: ImmunizationRecommendation[] =
    mapper.getRecommendations();
  return (
    <Stack>
      <Text color={'gray.500'} mb={5}>
        Upcoming vaccinations
      </Text>
    </Stack>
  );
}
