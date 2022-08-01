import {
  Box,
  BoxProps,
  Divider,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import React, { useState } from 'react';
import {
  FaAngleLeft,
  FaAngleRight,
  FaBookMedical,
  FaCog,
  FaRegCalendarAlt,
  FaSyringe,
} from 'react-icons/fa';
import { NavItem } from './navitem';
import { Link } from 'react-router-dom';
import VaccinationPass from '../../../../../md-dashboard/src/assets/VaccinationPass.png';
import VaccinationPassIcon from '../../../../../md-dashboard/src/assets/VaccinationPassIcon.png';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'History', icon: FaSyringe, link: 'history' },
  { name: 'Recommendations', icon: FaRegCalendarAlt, link: 'recommendations' },
  { name: 'Wiki', icon: FaBookMedical, link: 'wiki' },
];

export const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  const [navSize, changeNavSize] = useState('large');
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.15)'
      borderRadius={navSize === 'small' ? '20px' : '30px'}
      flexDir='column'
      justifyContent='space-between'
      m={'10px'}
      h={'95%'}
      pos='sticky'
      left='5'
      w={navSize === 'small' ? '75px' : '200px'}
      {...rest}
    >
      <Flex
        mt={2}
        flexDir='column'
        p='4%'
        w='100%'
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
      >
        <Link to={'/dashboard'}>
          <Flex
            mb={4}
            align='center'
            borderRadius={'20px'}
            p={navSize === 'small' ? '2px' : '5px'}
            _hover={{ boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.10)' }}
          >
            <Image
              src={VaccinationPassIcon}
              w={'50px'}
              h={'50px'}
              align={'center'}
              display={navSize === 'small' ? 'block' : 'none'}
            />
            <Image
              src={VaccinationPass}
              w={'250px'}
              align={'center'}
              display={navSize === 'small' ? 'none' : 'block'}
            />
          </Flex>
        </Link>

        <Divider mb={2} />
        {LinkItems.map((navLink) => (
          <NavItem
            title={navLink.name}
            icon={navLink.icon}
            navSize={navSize}
            active={false}
            link={navLink.link}
            onClose={onClose}
          >
            {navLink.name}
          </NavItem>
        ))}
      </Flex>

      <Box>
        <Flex
          mt={2}
          flexDir='column'
          p='5%'
          w='100%'
          alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        >
          <NavItem
            icon={FaCog}
            title={'Settings'}
            active={false}
            navSize={navSize}
            link={'settings'}
            onClose={onClose}
          />
          <Divider />
          <Flex align='center' w={navSize === 'small' ? 'unset' : '100%'}>
            <Menu placement='right'>
              <Flex
                borderRadius={'15px'}
                p={3}
                pt={1}
                pb={1}
                mt={2}
                mb={2}
                _hover={{
                  textDecor: 'none',
                  backgroundColor: 'brand.10',
                }}
                w={'100%'}
                color={'gray.500'}
                onClick={() => {
                  if (navSize === 'small') changeNavSize('large');
                  else changeNavSize('small');
                }}
              >
                <MenuButton>
                  <Flex>
                    <Icon
                      as={navSize === 'small' ? FaAngleRight : FaAngleLeft}
                      justifySelf={'center'}
                      alignSelf={'center'}
                      fontSize='xl'
                    />
                    <Text
                      align={'left'}
                      ml={2}
                      display={navSize === 'small' ? 'none' : 'flex'}
                    >
                      Collapse
                    </Text>
                  </Flex>
                </MenuButton>
              </Flex>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
