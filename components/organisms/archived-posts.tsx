import { Link, Box } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useMemo } from 'react';
import { frontMatter as MrRobotWriteup} from '../../pages/archive/mr-robot-1-writeup.mdx';
import { frontMatter as NibblesWriteup } from '../../pages/archive/nibbles-hack-the-box-writeup.mdx';
import { frontMatter as picoCTFWriteup } from '../../pages/archive/picoctf-2018-crypto-writeups.mdx';
import { frontMatter as WhyDymergeSucks } from '../../pages/archive/why-dymerge-sucks.mdx';
import formatDate from '../../utils/format-date';
import Card from '../molecules/card';

const archivedPosts: FrontMatter[] = [
	picoCTFWriteup,
	NibblesWriteup,
	WhyDymergeSucks,
	MrRobotWriteup,
];

type ArchivedPost = {
	title: string;
	publishedAt: string;
	slug: string;
};

const ArchivedPost = ({ title, publishedAt, slug }: ArchivedPost) => {
	const iconPath = `/static/images/${slug.replace('archive/', '')}/icon.svg`;
	const formattedDate = useMemo(
		() => formatDate(publishedAt),
		[publishedAt]
	);

	return (
		<NextLink
			passHref
			href={`/${slug}`}
		>
			<Link
				_focus={{ outline: 'none' }}
				_hover={{ textDecoration: 'none' }}
			>
				<Card
					icon={
						<Image
							alt={title}
							height={50}
							src={iconPath}
							width={50}
						/>
					}
					subtitle={formattedDate}
					title={title}
				/>
			</Link>
		</NextLink>
	);
};

const ArchivedPosts = () => {
	return (
		<Box
			boxSizing="border-box"
			id="archived-posts"
			mb={0}
			mx="auto"
			w={{ base: '85%', md: '90%' }}
		>
			{archivedPosts.map(post => (
				<ArchivedPost
					key={post.title}
					publishedAt={post.publishedAt}
					slug={post.__resourcePath.replace('.mdx', '')}
					title={post.title}
				/>
			))}
		</Box>
	);
};

export default ArchivedPosts;
