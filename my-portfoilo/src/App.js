import { Flex, Heading, Spacer, useColorMode, VStack } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';
const App = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	return (
		<VStack p={5}>
			<Flex w="100%">
				<Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
					My Portfolio
				</Heading>
				<Spacer />
				<IconButton ml="2" icon={<FaLinkedin />} isRound="true" onClick={toggleColorMode} />
				<IconButton ml="2" icon={<FaInstagram />} isRound="true" onClick={toggleColorMode} />
				<IconButton ml="2" icon={<FaGithub />} isRound="true" onClick={toggleColorMode} />
				<IconButton ml="8" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} />
			</Flex>
			<Header />
			<Social />
			<Profile />
		</VStack>
	);
};

export default App;
