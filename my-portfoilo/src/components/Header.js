import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';

function Header() {
	const { colorMode } = useColorMode();
	const isDark = colorMode === 'dark';

	const [ isNotSmallerScreen ] = useMediaQuery('(min-width:600px)');

	return (
		<Stack>
			<Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
			<Flex
				direction={isNotSmallerScreen ? 'row' : 'column'}
				spacing="200px"
				p={isNotSmallerScreen ? '32' : '0'}
				alignSelf="flex-start"
			>
				<Box mt={isNotSmallerScreen ? '0' : 16} align="flex-start">
					<Text fontSize="5xl" fontWeight="semibold">
						Hi, I am
					</Text>
					<Text
						fontSize="7xl"
						fontWeight="bold"
						bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
						bgClip="text"
					>
						Shekhar Suman
					</Text>
					<Text color={isDark ? 'gray.200' : 'gray.500'}>
						GDE - Flutter, Firebase. Founder of https://codepur.dev & https://velocityx.dev. Building
						@frontierdotxyz, YouTuber & Entrepreneur 🗣
					</Text>
					<Button mt={8} colorScheme="blue" onClick={() => window.open('https://pawan.live')}>
						Hire Me
					</Button>
				</Box>
				<Image
					alignSelf="center"
					mt={isNotSmallerScreen ? '0' : '12'}
					mb={isNotSmallerScreen ? '0' : '12'}
					borderRadius="full"
					backgroundColor="transparent"
					boxShadow="lg"
					boxSize="300px"
					src="https://lh3.googleusercontent.com/9YLhi4ejbPJ-CQL5IM3hIxrmUFL2RleR1ns-PYS8Z6oD56JbfpFUQd0fbsfezmGlIiEukGrXjF9aFwU-WIBiBXzF6y1rl7keHcxQmKV8vrXmEDb3MYcAFw17SU51p3-MTvs1DjtJx80XT9g-qRfXGyWJuwD3OlgazCrBKVnobAXd47cV5e5CncQdWhdOipkbdLmYpowKJXj9at4n5lmVk79ZmsIpGxS_1N7k21S4b4L93AAvmv0Ml_9YKC9NWszOmm6o12zMdYZ5iZjjf3uBQ9LRGDcSKwnZwdsmcb9B8jjzydpgrPh3NTfW2WiD3W4YKGM6BTNGXescOP81VKHmuiITmFgytxFN96ohn8bbLUQ4ji73yTbD4yTe3v487J9-zh_yDTJZX_JTtBV6yFXysBH4AOLuZRvLGrf6emz2Sv7iYx5AuSH8y3yVuy1urNmyIGYOUK7AVckB-6ftI-D041iWcSCfXQBv1LzDsuA8vsb6OiVf7AURNi0e6UkfKQTi4SuR7WERAto6cm9z5aOWSM4w_jD_WVp-1dPR8nx9wxlAKMXmzk9J558kAc692U9FNVjek31a7QONTWtdY9WILtrN8hqlhzjPS6LZkIzathYyBXweMXElfK62UdF_C2lVNkk4k6FRDjfsMeHtZgYYwYSriFE6dkhcWaru-0u6MDl9nNqt7gglMdjqGdEi59AstzZOl_e4LyAqvHqwE9XJkRUPtfk_mrFjvsFwdf9u-81PJajFxPQ7lIQDzsFkHXT2tRMBR830n8Em2xcivpmLUIAMJpQrp46vi-e0gp_PX5-KYoLASqgL97U9-uHV0xMxbvy1WJYVssH-aedyebfx_XwuOrgeKrEpJWxr4PKgtq-ZmvhRkbrTpXwgkhrD_H4hG1SseidC7vF1AGEVH9vkgYxcjf5YJlrz5IPMRpMfRAay5HcRNg=s903-no?authuser=0"
				/>
			</Flex>
		</Stack>
	);
}

export default Header;
