-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2023 at 08:38 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `neplance`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`username`, `password`) VALUES
('admin@neplance', 'Gorkha@$2023');

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sender_id` bigint(20) UNSIGNED NOT NULL,
  `recipient_id` bigint(20) UNSIGNED NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`id`, `sender_id`, `recipient_id`, `message`, `created_at`, `updated_at`) VALUES
(149, 32, 27, 'Hey!', '2023-05-08 11:24:54', '2023-05-08 11:24:54'),
(150, 27, 32, 'hi', '2023-05-08 11:25:02', '2023-05-08 11:25:02'),
(151, 32, 27, 'yyooyo', '2023-05-08 11:25:13', '2023-05-08 11:25:13'),
(156, 34, 35, 'Hey when can you deliver my order?', '2023-05-08 13:46:57', '2023-05-08 13:46:57'),
(157, 35, 34, 'Hmm', '2023-05-08 13:47:42', '2023-05-08 13:47:42'),
(158, 35, 34, 'In about 5 days', '2023-05-08 13:47:57', '2023-05-08 13:47:57'),
(159, 34, 35, 'Okay cool!', '2023-05-08 13:48:05', '2023-05-08 13:48:05'),
(160, 35, 34, 'Yo', '2023-05-08 14:20:32', '2023-05-08 14:20:32'),
(161, 34, 35, 'yeet', '2023-05-08 14:20:44', '2023-05-08 14:20:44'),
(162, 35, 34, 'asas', '2023-05-08 14:21:31', '2023-05-08 14:21:31'),
(163, 34, 35, 'asdd', '2023-05-08 14:21:42', '2023-05-08 14:21:42'),
(164, 35, 34, 'sa', '2023-05-08 14:21:54', '2023-05-08 14:21:54'),
(165, 35, 34, 'sss', '2023-05-08 14:22:21', '2023-05-08 14:22:21'),
(166, 34, 35, 'sss', '2023-05-08 14:22:31', '2023-05-08 14:22:31'),
(167, 35, 34, 'sss', '2023-05-08 14:22:35', '2023-05-08 14:22:35'),
(168, 34, 35, 'aaa', '2023-05-08 14:22:39', '2023-05-08 14:22:39'),
(169, 35, 34, 'ooo', '2023-05-08 14:22:43', '2023-05-08 14:22:43'),
(170, 28, 27, 'Hi', '2023-05-08 14:25:13', '2023-05-08 14:25:13'),
(171, 27, 28, 'hello', '2023-05-08 14:25:25', '2023-05-08 14:25:25'),
(172, 27, 28, 'Thank u for order', '2023-05-08 14:25:46', '2023-05-08 14:25:46'),
(173, 28, 27, 'No worries', '2023-05-08 14:25:58', '2023-05-08 14:25:58'),
(174, 28, 27, 'Great work', '2023-05-08 14:26:03', '2023-05-08 14:26:03'),
(175, 27, 28, 'Thank you. Please leave a review on my profile :)', '2023-05-08 14:26:44', '2023-05-08 14:26:44'),
(176, 27, 28, ':)', '2023-05-08 14:29:58', '2023-05-08 14:29:58'),
(177, 28, 27, ':)', '2023-05-08 14:30:03', '2023-05-08 14:30:03'),
(178, 32, 27, 'yoo', '2023-05-09 03:25:16', '2023-05-09 03:25:16'),
(179, 27, 32, 'yee', '2023-05-09 03:25:37', '2023-05-09 03:25:37'),
(180, 34, 33, 'Hey', '2023-05-10 09:37:44', '2023-05-10 09:37:44'),
(181, 33, 34, 'hi', '2023-05-10 09:37:59', '2023-05-10 09:37:59'),
(182, 34, 33, 'askhdkhsa', '2023-05-10 09:38:09', '2023-05-10 09:38:09'),
(183, 33, 34, 'kajsd', '2023-05-10 09:38:12', '2023-05-10 09:38:12'),
(184, 103, 27, 'Hey', '2023-05-10 10:06:01', '2023-05-10 10:06:01'),
(185, 27, 103, 'hi', '2023-05-10 10:06:28', '2023-05-10 10:06:28'),
(186, 103, 27, 'kk', '2023-05-10 10:06:38', '2023-05-10 10:06:38'),
(187, 27, 103, 'pp', '2023-05-10 10:06:42', '2023-05-10 10:06:42'),
(188, 27, 32, 'eeeeeeeeeeeeeee', '2023-05-19 01:24:33', '2023-05-19 01:24:33'),
(189, 27, 32, 'yyyy', '2023-05-19 01:24:42', '2023-05-19 01:24:42'),
(190, 27, 32, 'fhfgh', '2023-05-19 01:24:51', '2023-05-19 01:24:51'),
(191, 27, 32, 'asdas', '2023-05-19 01:26:27', '2023-05-19 01:26:27'),
(192, 32, 27, 'hi', '2023-05-20 02:00:32', '2023-05-20 02:00:32'),
(193, 32, 27, 'hi', '2023-05-20 02:00:55', '2023-05-20 02:00:55'),
(194, 32, 27, 'hi', '2023-05-20 02:01:59', '2023-05-20 02:01:59'),
(195, 32, 27, 'hi', '2023-05-20 05:21:53', '2023-05-20 05:21:53'),
(196, 27, 32, 'hi', '2023-05-20 05:21:57', '2023-05-20 05:21:57'),
(201, 110, 112, 'Hey', '2023-05-21 02:22:11', '2023-05-21 02:22:11'),
(202, 112, 110, 'hi', '2023-05-21 02:22:26', '2023-05-21 02:22:26'),
(203, 110, 112, 'hello', '2023-05-21 02:22:37', '2023-05-21 02:22:37'),
(204, 112, 110, 'hello', '2023-05-21 02:22:41', '2023-05-21 02:22:41');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `id` bigint(20) NOT NULL,
  `question` varchar(500) DEFAULT NULL,
  `answer` varchar(500) DEFAULT NULL,
  `link` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`id`, `question`, `answer`, `link`) VALUES
(14, 'Is the payment method safe?', 'We work with Nepal\'s top payment company which guarantees your safety and security. All billing information is stored on our payment processing partner. You can learn more about them here:', 'https://khalti.com/'),
(15, 'How can I join as a freelancer on the website?', 'To join as a freelancer, you need to sign up on our website and create a profile. Provide information about your skills, experience, education, and upload some necessary documents. Once your profile is complete, you can start posting your services or seek a listed jobs that fit your skills.', NULL),
(16, 'Can I buy services from the Freelancer without posting for a job?', 'Yes! You can browse various services listed by the freelancers if you do not want to post a job. You can browse services from the homepage or by visiting the freelancer\'s profile.', NULL),
(18, 'Is there a rating or review system on the website?', 'Yes, our platform includes a rating and review system. Clients can rate and provide feedback on freelancers based on their experience working together. Likewise, freelancers can rate and review clients. These ratings and reviews help build trust and transparency within the community. Clients can also rate services if they have bought them.', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '0000_00_00_000000_create_websockets_statistics_entries_table', 2),
(6, '2023_05_01_112909_create_chats_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `notification_history`
--

CREATE TABLE `notification_history` (
  `id` bigint(20) NOT NULL,
  `notification` varchar(500) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notification_history`
--

INSERT INTO `notification_history` (`id`, `notification`, `user_id`) VALUES
(30, 'Your order from Nujan\r\nSitaula has been delivered', 29),
(31, 'Your request for \'Become a Freelancer\' has been approved', 112),
(32, 'You have a new order from Ajay Ojha', 112),
(33, 'Your order from Kishor Gautam has been delivered', 110),
(34, 'You have a new message from Ajay Ojha', 112),
(35, 'You have a new message from Kishor Gautam', 110),
(36, 'You have a new message from Ajay Ojha', 112),
(37, 'You have a new message from Kishor Gautam', 110);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `seller_id` bigint(20) NOT NULL,
  `client_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `quantity` int(5) NOT NULL,
  `price` varchar(20) NOT NULL,
  `comments` varchar(500) DEFAULT NULL,
  `token` varchar(200) NOT NULL,
  `status` varchar(10) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `comments_seller` varchar(200) DEFAULT NULL,
  `file_client` varchar(100) DEFAULT NULL,
  `file_seller` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `seller_id`, `client_id`, `product_id`, `quantity`, `price`, `comments`, `token`, `status`, `product_name`, `comments_seller`, `file_client`, `file_seller`) VALUES
(7, 27, 33, 18, 1, '20,000', 'Please make a responsive website for my team AFC Richmond', 'ENE7dhRZFNYKFqXTuzqPVR', 'success', 'Sports Website', NULL, NULL, NULL),
(8, 29, 33, 20, 1, '2,500', 'Please translate a 20 page essay for me. I will send it in your email.', 'kCmM2d3uTmzdh2U3zQo9TW', 'success', 'Translation', NULL, NULL, NULL),
(9, 33, 29, 46, 1, '10,000', 'I need this for my website. I\'ll send you all the details in email.', 'jAZVa4wHjHucyP84DQGY32', 'Delivered', 'I will create php html scraper or csv parser script', 'done', NULL, 'file_seller/olv6GHkBviJ7Il357FiB5Cfzk23XFCZFJcVvpxnp.png'),
(11, 27, 35, 12, 1, '5,000', 'Need a logo for my company \"Mero Sikshya\"', 'xfv982mikTbUkKdSq5vDJc', 'success', 'I will create a logo for you', 'Here is a logo your ordered. I hope you will like it!', NULL, 'file_seller/VL37LXF0g7wtukxtpQ9fXDEYBlpGOWl4N7X6gjXe.png'),
(12, 27, 35, 22, 1, '5,000', 'Please edit my company\'s stock pictures. I will provide u files in google drive.', 'YS44sahyuTNMMCaYiAL5M2', 'success', 'Photo Editing', 'ok', NULL, 'file_seller/h7AJXVWOrZHXix6Pp0FXz3N8qwm6hBXBAu1nyi5a.jpg'),
(17, 27, 96, 22, 1, '5,000', 'Ma aauta photo yaha attach garchu. teslai edit garera pathaunu hola', 'qnw6fB2ymwcxV8REebz9LQ', 'Delivered', 'Photo Editing', 'huss sir. maile edit gareko chu. i hope you like it', 'file_client/nwD2cxOwqS9A9XblzljwlG4NnYRDia75HlFZDo83.jpg', 'file_seller/XstAcTd3rsiBJMARDHcN2lFyyJvP3Gxqwt043BbC.jpg'),
(21, 35, 34, 68, 1, '2000', 'Need a website for Minecraft Community Nepal. You can check us out here: https://minecraft-mp.com/server-s293328', 'T66FsajKSwHttZakTyXwyB', 'success', 'I will be your react js javascript developer for web app in reactjs', NULL, 'file_client/A4UzsbVQ5ntYF9TqVNTjnmFzTLWKpWRCev2ygBas.webp', NULL),
(22, 27, 34, 22, 1, '5,000', 'Need picture editing. I will send Pic.', 'XKw7RJdDfqUX5tx3Qf4Tkn', 'Delivered', 'Photo Editing', NULL, 'file_client/A62gLnwxf8xkzmxIECiG6zbeMWbT1UMQEkqu8X3f.jpg', NULL),
(23, 27, 28, 12, 1, '5,000', 'need logo for my brand', 'ZZLf7oWnWHie9TRjCJ47Ti', 'Delivered', 'I will create a logo for you', 'huss here it is', 'file_client/IVkiVlRxmrRZdyywDqK6r8eB85T4gYSlklEuQkmB.jpg', 'file_seller/ZHZRxyDXOJc1yEbTAzssK49HlnnTTXmKBAKgHs2p.jpg'),
(24, 27, 103, 18, 1, '20,000', 'Make me a website for fyp', 'XufCfHggE4uioGhoVhaGsg', 'Delivered', 'Sports Website', 'Done', 'file_client/jtvVItYPqBECGeTmwRx6onoZMmrKatpmtXEr7M23.jpg', 'file_seller/yY4PKo21cvvOD5lbyjCES8EmOFgNVaeGRDcu1Eir.jpg'),
(28, 112, 110, 81, 1, '5000', 'Please fix bugs for my website', 'sBcwe6Fp5fG6hRhQEeWLDQ', 'Delivered', 'I will fix bugs in Rect.js for you', 'Here you go. Hope you like it!', 'file_client/1KPPLutGFwFlEzNQ3DDKUaJCAYAI5GO3r57WvNCf.png', 'file_seller/4WBvF5KiqvUkcqEuh9OoCkKXXYrpmi5yImZz5eDh.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(120) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `file_path` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `price` varchar(50) NOT NULL,
  `updated_at` date NOT NULL,
  `created_at` date NOT NULL,
  `category` varchar(100) NOT NULL,
  `userid` bigint(20) UNSIGNED NOT NULL,
  `report` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `file_path`, `description`, `price`, `updated_at`, `created_at`, `category`, `userid`, `report`) VALUES
(9, 'Video Editing', 'product/BmH6gh4AsSUKwrQL1jC6wpibKKq2GlsqIQRv8chF.jpg', 'I will edit videos for you in Adobe After effects.', '10,000', '2023-03-01', '2023-03-01', 'design-editing', 29, 0),
(12, 'I will create a logo for you', 'product/Ql4OaaHz4n4KsEcBtpfeh6p2wz4R0aOjhiDqXVS1.jpg', 'I will create high class logo for affordable price.', '6,000', '2023-05-18', '2023-03-03', 'design-editing', 27, 0),
(18, 'Sports Website', 'product/ORtP3ns3YcbPBtzrakkJGLLxiniCdFd2YQWrrWZg.jpg', 'I will create a high quality sports team website.', '20,000', '2023-03-14', '2023-03-14', 'computer-it', 27, 0),
(19, 'Resume/CV Writing', 'product/7hknqPRCf3xvEPE0J9PN6XvLcMI2Ms5FeAQkFNfX.webp', 'I will professionally rewrite,resume, cover letter and linkedin', '2,000', '2023-03-14', '2023-03-14', 'writing', 29, 0),
(20, 'Translation', 'product/xnReIvC6VLywTG0bNdxeLnSQHvTR92fcsyKln250.webp', 'I will manually translate english to korean or vice versa', '2,500', '2023-03-14', '2023-03-14', 'writing', 29, 0),
(21, 'Medical Billing', 'product/rU1prV7a1M3v1KIvwQExyJ3S5TBeXszzyK103Y9s.webp', 'I will be virtual assistant customer support, medical billing, coding assistant, biller', '1,300', '2023-03-14', '2023-03-14', 'administrative', 29, 0),
(22, 'Photo Editing', 'product/og0I14bXCmYg5YclDqrU8Op7PSqPt1UkZCBXjGcU.webp', 'I will do high quality photoshop editing or photo manipulation', '5,000', '2023-03-14', '2023-03-14', 'design-editing', 27, 0),
(46, 'I will create php html scraper or csv parser script', 'product/hello2.png', 'I can help you with creating php script for parsing/scraping Document Object Model (DOM) in html files. With this type of scripts you can parse/scrape content in html files or you can change content/structure in html files.', '10,000', '2023-04-07', '2023-04-07', 'computer-it', 33, 0),
(68, 'I will be your react js javascript developer for web app in reactjs', 'product/sNECrhYSygWPEXen68rCBd5t8u3zCRCzCSxKnLg5.webp', 'I will fix one or two small bugs in react gatsby or nextjs application', '2,000', '2023-05-21', '2023-05-07', 'computer-it', 35, 2),
(76, 'I will be your full time customer service representative as customer support agent', 'product/Kg5xg29n9nUSGWNEEMtKAWmxRimyu9pZzkVD83pN.webp', '1 day,\r\n1 hour of work,\r\nEmail support,\r\nSocial media support,\r\nLive chat support,\r\nSummary report,', '5,000', '2023-05-21', '2023-05-21', 'customerservice', 29, 0),
(77, 'I will do accounting, economics and finance projects using excel', 'product/LEYQUuCDs2uXn5p4c8WVqLL7771BR6noz9HZPMt7.webp', 'I have experience of working in the field of accounting, auditing, taxation and finance. I was responsible for financial planning and preparing budgets & financial statements for the clients, I also have essential knowledge about the application of all current accounting standards.', '10,000', '2023-05-21', '2023-05-21', 'account-finance', 29, 0),
(78, 'I will be your business statistic and math tutor', 'product/HT3UdE0qDRDVy6FTnR4s8vtunsUmA3krwtnCo8pm.jpg', 'I have experience of more than 6 years dealing with Statistics and math courses.\n\nI\'ll help you out to come up with solutions in a satisfactory manner!', '2,000', '2023-05-21', '2023-05-21', 'education-training', 29, 0),
(79, 'I will give you HR or recruiting advice over zoom or phone', 'product/UQuIuR9KldSKB6a45qrAJDNuzD6mXxhEOq0wDAXv.webp', 'I will give you HR or Recruiting advice over the phone or via Skype or Zoom. I will also provide you with resources to help you in your situation.', '8,000', '2023-05-21', '2023-05-21', 'hr-recruit', 29, 0),
(80, 'I will do wellness, nutrition, health, yoga, and medical logo', 'product/6jVx4XyJlbNOMWrl47JJQ6pCb9IGtyhBuhcpPNCI.webp', 'Support:\r\n\r\nEasy Communication\r\nFast Delivery\r\nUnlimited Modifications\r\n100% satisfaction guaranteed\r\n\r\n\r\nWhy Me?\r\n\r\nLifetime Free Support! (Premium)\r\nFull Copyrights! (Standard)\r\nModern & minimalist designs\r\nSuper-fast delivery\r\nHigh Quality professional work\r\n\r\n\r\nPlease Note:\r\n\r\nI don\'t design for adult & wine company logo', '5,000', '2023-05-21', '2023-05-21', 'medical-health', 29, 0),
(81, 'I will fix bugs in Rect.js for you', 'product/8s8JWMQlHoKAd9LcRWlzl0IM57xl6LrgOMF53cXK.jpg', 'You can expect me to be able to answer all of your questions related to website/app building, backend dev, or how to set up a server for your project.\r\nI can adjust what we learn together to give you the skill set you desire. My course will be composed of simple lessons and concrete project building.\r\nDo not hesitate to send me a message for more information!I will take 11,000 per project to fix all the bugs.', '5000', '2023-05-21', '2023-05-21', 'computer-it', 112, 0);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(120) NOT NULL,
  `userid` bigint(20) UNSIGNED NOT NULL,
  `productid` int(120) NOT NULL,
  `review` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `rating` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `userid`, `productid`, `review`, `username`, `rating`) VALUES
(15, 27, 20, 'Highly Recommended!', 'Suyogya Gautam', 5),
(17, 32, 22, 'Bang for the buck!', 'Raymon', 4),
(20, 28, 18, 'I would say it\'s worth the money!', 'Rhitika Parajuli', 4),
(22, 33, 21, 'I got Scammed! :(', 'Nujan Sitaula', 1),
(23, 34, 22, 'Best editor in Town!', 'Sabin Adhikari', 5),
(34, 29, 19, 'Thank you! This was worth it!', 'Gaurav Thapaliya', 4),
(46, 32, 46, '5 strat', 'Raymon', 5),
(47, 27, 46, '2 start', 'Suyogya Gautam', 2),
(50, 35, 12, 'Nice logo', 'Ashim Baral', 4),
(57, 27, 9, 'Amazing Video Editing Skills!', 'Suyogya Gautam', 5),
(59, 35, 12, 'ajsb', 'Ashim Baral', 5),
(61, 28, 12, 'Amazing editing!', 'Rhitika Parajuli', 5),
(62, 103, 18, 'amazing', 'Yogesh Kharel', 5),
(63, 12346, 19, 'ajsdh', 'messi', 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `designation` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file_path` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT 'users/hello.jpg',
  `number` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isVerified` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'no',
  `otp` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` varchar(5000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ctznship` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ctzn_verified` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'no',
  `admin_message` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `registered_as` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cv` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `occupation` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `occupation_since` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `degree` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `graduation_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `proof_degree` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `requested` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT 'no',
  `keywords` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profile_setup` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `designation`, `file_path`, `number`, `isVerified`, `otp`, `bio`, `ctznship`, `ctzn_verified`, `admin_message`, `registered_as`, `contact_email`, `cv`, `occupation`, `occupation_since`, `degree`, `graduation_date`, `proof_degree`, `requested`, `keywords`, `profile_setup`) VALUES
(4, 'Prof. Isadore Toy Sr.', 'wilkinson.jada@example.com', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'efMxqY51Bx', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL, NULL),
(5, 'Shakira Spinka', 'julie.herzog@example.net', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Wkpa2M4pmo', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL, NULL),
(6, 'Marianna Weimann', 'gabshire@example.net', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'obek0rKAKP', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL, NULL),
(7, 'Hollie Ryan', 'rgreenholt@example.org', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'hg7HbGoeti', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL, NULL),
(8, 'Dr. Adrienne Ruecker IV', 'lourdes.walsh@example.net', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rOQUr07KyA', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL, NULL),
(9, 'Prof. Norberto Leannon', 'qkshlerin@example.net', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '9oWbCwDoC4', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL, NULL),
(10, 'Prof. Jakob Batz', 'ernser.ebony@example.net', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '9mG49CIqKM', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL, NULL),
(11, 'Test User', 'test@example.com', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'iM8fRW979A', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL, NULL),
(27, 'Suyogya Gautam', 'suyogya', NULL, '$2y$10$fa7VSYwaCVvhrt5q0txoCeUetxFsDXWzNq3WnusuYuIe6k1ZyM8vu', NULL, 'NepLance User', 'users/XAbNhkAyjj9Pbay2GT8JzAwnyDkAEifQkYkyNNxh.jpg', '9851077229', 'yes', '', 'I am a student at Herald College, Kathmandu studying Bachelors (Hons.) in Computer Science. I am studying Python, Java and mySQL at college. I have good knowledge and skill on MS Word, PowerPoint and Excel. I can also work on Adobe Photoshop, Premier Pro and After Effects.', 'users/Ze43FhpMjTqLvNNgEVAyLHMFyhNHT6gaLMRlwzRj.png', 'yes', NULL, 'seller', 'gsuyogya@gmail.com', 'users/9rmGp4sUIySFmR9txXOoCUQPeWlZYO6aeYtQhVMj.pdf', 'design-editing', '2020-01-04', 'Bsc. Hons. Computer Science', '2023-06-01', 'users/Acoo1ikNmTJtCcQwzp7Iwpz9VKZE1jRHDKbYh9CO.png', 'no', 'medical-health,writing', '1'),
(28, 'Rhitika Parajuli', 'rhitika', NULL, '$2y$10$Rj8QClDVCDaU5CvuC6aBcerJu3MqVYXEUlFO6PepWKpfryTwvCK5q', NULL, 'Designer', 'users/JluYem5LpJNiPCI4kzMDeyRUYk7jm0OZidI9PcGg.png', '9848909011', 'yes', '', 'null', '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', 'design-editing', '1'),
(29, 'Gaurav Thapaliya', 'gaurav', NULL, '$2y$10$lup5iPW.f4hAd8eLWFim2ey8xDDrW27YEtEKZopNxTJHlGWmZWp9S', NULL, 'Freelancer', 'users/hello.jpg', '9848974591', 'yes', '0', 'This is my bio. Reach me at \"gauravthapaliaya10@gmail.com\"', '', 'no', NULL, 'seller', 'gauravthapaliya@gmail.com', NULL, 'writing', NULL, NULL, NULL, NULL, 'no', 'writing', '1'),
(32, 'Raymon', 'raymon', NULL, '$2y$10$2KeaC14wSl/Ws51nRgPuM.ztvPvwwz9Ndw4CydPx/t/XUOL66mjFC', NULL, 'Full Stack Developer', 'users/9FA3uPP1G3XWG8wnqFBpLnK1ILR1J1dU3ydJIC0t.png', '9848974596', 'yes', '0', 'No Bio lol', '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', 'writing,design-editing', '1'),
(33, 'Nujan\nSitaula', 'nujan', NULL, '$2y$10$rlk/PtMudA/asZNpNi5rieCMOsmjSrqv4J3MlY01xVrYVibMS.vTq', NULL, 'PHP Developer', 'users/293YoKVspBVmcS8lVJzeuWDpmxWuDdTO5y27nLA4.jpg', '9848974594', 'yes', NULL, 'Full time PHP Developer. Studying at Herald College. Feel free to reach me at \"nujan@shotcoder.com.np\"', '', 'yes', NULL, 'seller', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', 'computer-it,education-training', '1'),
(34, 'Sabin Adhikari', 'sabin', NULL, '$2y$10$5Tjk6sInJEe2nOQXfJPEV.ldxlygdvncuCVAs7/Cxwwu7c5Xyvqvi', NULL, 'Unity Developer', 'users/hello.jpg', '9848974595', 'yes', '', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', 'administrative', '1'),
(35, 'Ashim Baral', 'ashim', NULL, '$2y$10$qHnRQ2HBjIb4e7dVFgOnU.Y4PbddrKb5CDxJELIQ8tWpo/YciC3AS', NULL, 'Frontend Developer', 'users/w14XJskZbexGGgfoqnX41ewHEokDkPqVrBAT9mZl.jpg', '9840856977', 'yes', NULL, 'A React frontend developer is a software professional who specializes in developing user interfaces and web applications using the React.js library. They possess strong programming skills in JavaScript and have a deep understanding of web development concepts, such as HTML, CSS, and client-side scripting.', 'users/J7TXx0B5eA3PO8uJJDHK6x0PkFMUMr7zHFOc32fG.png', 'yes', NULL, 'seller', 'reachashim@gmail.com', 'users/mjSTwX2KN7WudCqXSCVxayGt5ZSymiTs7J21E742.png', 'computer-it', '2020-02-14', 'Bsc. IT', '2023-05-16', 'users/tK3WnGhObGnoxIIgSyLEwOa0FkX2YYlO3XnnI9Ve.png', 'no', 'design-editing', '1'),
(103, 'Yogesh Kharel', 'yogesh10', NULL, '$2y$10$AT9.pnmqgMFjhQEeptvW7u5.cbysnjnfZm/Gfis4DRmGtME.KC7eO', NULL, 'Student', 'users/J1OSlqIyq8fyXiOoqMitoSLgpfcLWqn3f1GdxUal.jpg', '1234567890', 'yes', '', 'Hi this is my bio!', 'users/j0RsutT40dJG25mJhlUQnyNyQ7hENCmckrP5ycfH.jpg', 'yes', NULL, 'client', 'yogesh@gmail.com', 'users/dXn2LMXLfj9RRQeJhz2PaEuFbooA7Q1JcqfxItkw.jpg', 'account-finance', '2023-05-25', 'b', '2023-05-27', 'users/rboJWBAtNRjdai8oDVhvyl3lpxQ2Ba3aonkQ4mQF.jpg', 'no', 'writing,design-editing', '1'),
(110, 'Ajay Ojha', 'ajay10', NULL, '$2y$10$1t3zkAp83eThL6cREyyHsuD2wpRK6X/C/g81T3sLnwpsbe5lIlY5m', NULL, NULL, 'users/hello.jpg', '9746457607', 'yes', '', NULL, NULL, 'no', NULL, 'client', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', 'writing', '1'),
(112, 'Kishor Gautam', 'kishor.gautam', NULL, '$2y$10$mV2Z0A.CEa82UhEw8XCSl.bz3XpK.OS8cN5EIxqXT0KVtnJ8nc.oS', NULL, 'Senior Front-end Developer', 'users/yuDkF7wFVnebymxVeqFWowWgKESpn9oKmGNSkpNS.jpg', '9840856344', 'yes', '', 'I am a senior front-end developer specializing in React.js at ShotCoder Tech Pvt Ltd. With 5 years of industry experience and a master\'s degree in computer science, I bring a strong foundation in software development to my role. Passionate about designing and coding, I excel at creating intuitive user interfaces and implementing efficient front-end solutions. My attention to detail and focus on user experience ensure that every project I work on delivers a visually appealing and engaging product.', 'users/htXMUyEtQWSBfJDdygEkqIBQabi55NVfn6dMtxev.png', 'yes', NULL, 'seller', 'kishor.gautam@gmail.com', 'users/JnUL3VjWL1JKG2Ts7jrphHnAWvwZW8BAi41kzeQr.pdf', 'computer-it', '2020-01-21', 'Masters In Computer Science', '2020-01-21', 'users/TXR0uIeONFVlFDLVITFB4Ju5ufS89CjDJmGN47Gf.pdf', 'no', 'writing', '1');

-- --------------------------------------------------------

--
-- Table structure for table `user_requests`
--

CREATE TABLE `user_requests` (
  `id` int(11) NOT NULL,
  `userid` bigint(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `price` varchar(100) NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `sellerid` bigint(20) DEFAULT NULL,
  `seller_bid` varchar(100) DEFAULT NULL,
  `status` varchar(20) DEFAULT 'Not accepted yet',
  `delivery_date` varchar(50) DEFAULT NULL,
  `comments_seller` varchar(500) DEFAULT NULL,
  `file_seller` varchar(500) DEFAULT NULL,
  `payment_token` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_requests`
--

INSERT INTO `user_requests` (`id`, `userid`, `name`, `description`, `price`, `category`, `sellerid`, `seller_bid`, `status`, `delivery_date`, `comments_seller`, `file_seller`, `payment_token`) VALUES
(10, 32, 'Video Editor', 'I am looking for a video editor. You will have to edit a video for a commercial of my product. I will present you with 10 clips which you will have to edit and make a beautiful 1 minute commerical.', '12,000', 'design-editing', 27, NULL, 'Accepted', '2023-06-01', 'Here you go!', 'file_seller/p4I1KlyVVdMWGhtQY9HuN1pHwwJ5Bi6AkSDolRvt.jpg', 'a352sd4132a1d'),
(11, 34, 'Game Developer', 'I am in need of a game developer in Unity Engine. It is not a very big game. Just a small mini game. I will send the script once someone accepts it.', '20,000', 'computer-it', NULL, NULL, 'Not accepted yet', '2023-07-04', NULL, NULL, NULL),
(32, 32, 'asdfsafd', 'asdfasdf', '500', 'computer-it', 27, NULL, 'Accepted', '2023-04-22', NULL, NULL, NULL),
(40, 107, 'Plumber', 'I need a plumber for the construction of my ongoing corporate office. DOggy', '600000', 'customerservice', 29, NULL, 'Accepted', '2023-05-21', 'done', NULL, 'AejZx5MMpBnS6Ssztjh2z9');

-- --------------------------------------------------------

--
-- Table structure for table `user_reviews`
--

CREATE TABLE `user_reviews` (
  `id` bigint(20) NOT NULL,
  `userid` bigint(20) NOT NULL,
  `username` varchar(100) NOT NULL,
  `sellerid` bigint(20) NOT NULL,
  `review` varchar(500) NOT NULL,
  `rating` int(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_reviews`
--

INSERT INTO `user_reviews` (`id`, `userid`, `username`, `sellerid`, `review`, `rating`) VALUES
(7, 35, 'Ashim Baral', 27, 'Very co-operative and friendly. Great to work with!', 5),
(8, 69, 'John Doe', 27, 'Loved working with him!', 5),
(9, 699, 'Adarsh Ghimire', 27, 'Took too long to deliver the work. But the work was decent!', 3),
(10, 123, 'Kishor Gautam', 29, 'Great job once again!', 4),
(11, 123, 'Kishor Gautam', 33, 'Great to work with!', 4),
(12, 69, 'Adarsh Ghimire', 33, 'Good service but slow', 4),
(13, 69, 'Suyogya Gautam', 35, 'Very Satisfactory work! Recommended!', 4),
(16, 32, 'Raymon', 27, 'I requested for a commercial video editing. The work was delivered sooner than expected and the result was pretty amazing. Highly recommend everyone to get service from him!', 5),
(17, 27, 'Suyogya Gautam', 33, 'Thank your for helping me!', 4),
(18, 27, 'Suyogya Gautam', 103, 'Bad Client', 1);

-- --------------------------------------------------------

--
-- Table structure for table `websockets_statistics_entries`
--

CREATE TABLE `websockets_statistics_entries` (
  `id` int(10) UNSIGNED NOT NULL,
  `app_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `peak_connection_count` int(11) NOT NULL,
  `websocket_message_count` int(11) NOT NULL,
  `api_message_count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chats_sender_id_foreign` (`sender_id`),
  ADD KEY `chats_recipient_id_foreign` (`recipient_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification_history`
--
ALTER TABLE `notification_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_requests`
--
ALTER TABLE `user_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_reviews`
--
ALTER TABLE `user_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=205;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `notification_history`
--
ALTER TABLE `notification_history`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(120) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(120) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT for table `user_requests`
--
ALTER TABLE `user_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `user_reviews`
--
ALTER TABLE `user_reviews`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `chats_recipient_id_foreign` FOREIGN KEY (`recipient_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `chats_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
