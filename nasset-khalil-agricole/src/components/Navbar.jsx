import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
  HStack,
} from '@chakra-ui/react'
import { FaPhone, FaShoppingCart, FaLeaf, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import logo from '../../public/logo.png'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1000}
      bg="white"
      boxShadow="sm"
      borderBottom="1px"
      borderColor="gray.200"
    >
      {/* Top Bar */}
      <Box bg="green.dark" color="white" py={2}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" fontSize="sm">
            <HStack spacing={4}>
              <HStack>
                <FaPhone />
                <Text>+213 XXX XXX XXX</Text>
              </HStack>
              <Text display={{ base: 'none', md: 'block' }}>
                Vente des Équipements Agricoles
              </Text>
            </HStack>
            <HStack>
              <Button
                as={RouterLink}
                to="/contact"
                size="sm"
                colorScheme="green"
                variant="solid"
                leftIcon={<FaPhone />}
              >
                Contactez-nous
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Navigation */}
      <Container maxW="container.xl">
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <Icon as={FaTimes} w={3} h={3} /> : <Icon as={FaBars} w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align="center">
            <Link
              as={RouterLink}
              to="/"
              _hover={{ textDecoration: 'none' }}
            >
              <HStack spacing={3}>
                <Box
                  w={{ base: '40px', md: '50px' }}
                  h={{ base: '40px', md: '50px' }}
                  borderRadius="md"
                  overflow="hidden"
                  flexShrink={0}
                >
                  <img 
                    src={logo} 
                    alt="Centrale Pompe Tunisie Logo" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </Box>
                <Box textAlign="left">
                  <Text
                    fontSize={{ base: 'md', md: 'xl' }}
                    fontWeight="bold"
                    color="green.dark"
                    lineHeight="1.2"
                  >
                    CENTRALE POMPE TUNISIE
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.600" lineHeight="1">
                    Vente des Équipements Agricoles
                  </Text>
                </Box>
              </HStack>
            </Link>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button
              as={RouterLink}
              to="/products"
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'green.600'}
              _hover={{
                bg: 'green.700',
              }}
              leftIcon={<FaShoppingCart />}
            >
              Nos Produits
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('green.600', 'white')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            as={RouterLink}
            to={navItem.href ?? '#'}
            p={2}
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, href }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={RouterLink}
        to={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  )
}

const NAV_ITEMS = [
  {
    label: 'Accueil',
    href: '/',
  },
  {
    label: 'Produits',
    href: '/products',
  },
  {
    label: 'À Propos',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]
