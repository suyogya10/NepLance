-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2023 at 01:05 PM
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
  `from_userid` bigint(20) NOT NULL,
  `to_userid` bigint(20) NOT NULL,
  `message` varchar(100) NOT NULL,
  `username` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `citizenship`
--

CREATE TABLE `citizenship` (
  `userid` bigint(20) UNSIGNED NOT NULL,
  `file_path` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'Declined'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

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
(9, 33, 29, 46, 1, '10,000', 'I need this for my website. I\'ll send you all the details in email.', 'jAZVa4wHjHucyP84DQGY32', 'success', 'I will create php html scraper or csv parser script', NULL, NULL, NULL),
(11, 27, 35, 12, 1, '5,000', 'Need a logo for my company \"Mero Sikshya\"', 'xfv982mikTbUkKdSq5vDJc', 'Delivered', 'I will create a logo for you', 'Here is a logo your ordered. I hope you will like it!', NULL, 'file_seller/VL37LXF0g7wtukxtpQ9fXDEYBlpGOWl4N7X6gjXe.png'),
(12, 27, 35, 22, 1, '5,000', 'Please edit my company\'s stock pictures. I will provide u files in google drive.', 'YS44sahyuTNMMCaYiAL5M2', 'Delivered', 'Photo Editing', 'ok', NULL, 'file_seller/h7AJXVWOrZHXix6Pp0FXz3N8qwm6hBXBAu1nyi5a.jpg'),
(17, 27, 96, 22, 1, '5,000', 'Ma aauta photo yaha attach garchu. teslai edit garera pathaunu hola', 'qnw6fB2ymwcxV8REebz9LQ', 'Delivered', 'Photo Editing', 'huss sir. maile edit gareko chu. i hope you like it', 'file_client/nwD2cxOwqS9A9XblzljwlG4NnYRDia75HlFZDo83.jpg', 'file_seller/XstAcTd3rsiBJMARDHcN2lFyyJvP3Gxqwt043BbC.jpg'),
(18, 29, 27, 9, 1, '10,000', 'edit my video', 'DxGShz4kexV3YZWs7gpk3K', 'Delivered', 'Video Editing', 'done', 'file_client/Z3xWjkAaT2uuAVL3wR6dmossxTUhLHWaHKQIxSPe.jpg', 'file_seller/m4hBkF9AA7NfrJE8UPtJUVFcpXuX5IxWN4LjDjiS.jpg');

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
  `name` varchar(100) NOT NULL,
  `file_path` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `price` varchar(50) NOT NULL,
  `updated_at` date NOT NULL,
  `created_at` date NOT NULL,
  `category` varchar(100) NOT NULL,
  `userid` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `file_path`, `description`, `price`, `updated_at`, `created_at`, `category`, `userid`) VALUES
(9, 'Video Editing', 'product/BmH6gh4AsSUKwrQL1jC6wpibKKq2GlsqIQRv8chF.jpg', 'I will edit videos for you in Adobe After effects.', '10,000', '2023-03-01', '2023-03-01', 'design-editing', 29),
(12, 'I will create a logo for you', 'product/Ql4OaaHz4n4KsEcBtpfeh6p2wz4R0aOjhiDqXVS1.jpg', 'I will create high class logo for affordable price.', '5,000', '2023-03-03', '2023-03-03', 'design-editing', 27),
(18, 'Sports Website', 'product/ORtP3ns3YcbPBtzrakkJGLLxiniCdFd2YQWrrWZg.jpg', 'I will create a high quality sports team website.', '20,000', '2023-03-14', '2023-03-14', 'computer-it', 27),
(19, 'Resume/CV Writing', 'product/7hknqPRCf3xvEPE0J9PN6XvLcMI2Ms5FeAQkFNfX.webp', 'I will professionally rewrite,resume, cover letter and linkedin', '2,000', '2023-03-14', '2023-03-14', 'writing', 29),
(20, 'Translation', 'product/xnReIvC6VLywTG0bNdxeLnSQHvTR92fcsyKln250.webp', 'I will manually translate english to korean or vice versa', '2,500', '2023-03-14', '2023-03-14', 'writing', 29),
(21, 'Medical Billing', 'product/rU1prV7a1M3v1KIvwQExyJ3S5TBeXszzyK103Y9s.webp', 'I will be virtual assistant customer support, medical billing, coding assistant, biller', '1,300', '2023-03-14', '2023-03-14', 'administrative', 29),
(22, 'Photo Editing', 'product/og0I14bXCmYg5YclDqrU8Op7PSqPt1UkZCBXjGcU.webp', 'I will do high quality photoshop editing or photo manipulation', '5,000', '2023-03-14', '2023-03-14', 'design-editing', 27),
(46, 'I will create php html scraper or csv parser script', 'product/hello2.png', 'I can help you with creating php script for parsing/scraping Document Object Model (DOM) in html files. With this type of scripts you can parse/scrape content in html files or you can change content/structure in html files.', '10,000', '2023-04-07', '2023-04-07', 'computer-it', 33);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(120) NOT NULL,
  `userid` bigint(20) UNSIGNED NOT NULL,
  `productid` int(120) NOT NULL,
  `review` varchar(200) NOT NULL,
  `username` varchar(20) NOT NULL,
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
(57, 27, 9, 'Amazing Video Editing Skills!', 'Suyogya Gautam', 5);

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
  `bio` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
  `keywords` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `designation`, `file_path`, `number`, `isVerified`, `otp`, `bio`, `ctznship`, `ctzn_verified`, `admin_message`, `registered_as`, `contact_email`, `cv`, `occupation`, `occupation_since`, `degree`, `graduation_date`, `proof_degree`, `requested`, `keywords`) VALUES
(3, 'Skyla Schowalter', 'bogan.claire@example.net', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'RjM0RfKPG6', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(4, 'Prof. Isadore Toy Sr.', 'wilkinson.jada@example.com', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'efMxqY51Bx', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(5, 'Shakira Spinka', 'julie.herzog@example.net', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Wkpa2M4pmo', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(6, 'Marianna Weimann', 'gabshire@example.net', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'obek0rKAKP', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(7, 'Hollie Ryan', 'rgreenholt@example.org', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'hg7HbGoeti', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(8, 'Dr. Adrienne Ruecker IV', 'lourdes.walsh@example.net', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rOQUr07KyA', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(9, 'Prof. Norberto Leannon', 'qkshlerin@example.net', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '9oWbCwDoC4', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(10, 'Prof. Jakob Batz', 'ernser.ebony@example.net', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '9mG49CIqKM', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(11, 'Test User', 'test@example.com', '2023-02-25 06:27:01', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'iM8fRW979A', '', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(27, 'Suyogya Gautam', 'suyogya', NULL, '$2y$10$GVh9/pn5awSUXx4fggB7duLXffuuf1Il3gf0c5sYKbU9j/9IfVr36', NULL, 'NepLance User', 'users/XAbNhkAyjj9Pbay2GT8JzAwnyDkAEifQkYkyNNxh.jpg', '9840856344', 'yes', '', 'I am a student at Herald College, Kathmandu studying Bachelors (Hons.) in Computer Science. I am studying Python, Java and mySQL at college. I have good knowledge and skill on MS Word, PowerPoint and Excel. I can also work on Adobe Photoshop, Premier Pro and After Effects.', 'users/Ze43FhpMjTqLvNNgEVAyLHMFyhNHT6gaLMRlwzRj.png', 'yes', NULL, 'seller', 'gsuyogya@gmail.com', 'users/9rmGp4sUIySFmR9txXOoCUQPeWlZYO6aeYtQhVMj.pdf', 'computer-it', '2020-01-04', 'Bsc. Hons. Computer Science', '2023-06-01', 'users/Acoo1ikNmTJtCcQwzp7Iwpz9VKZE1jRHDKbYh9CO.png', 'no', 'writing'),
(28, 'Rhitika Parajuli', 'rhitika', NULL, '$2y$10$Hka3LwdImO53YbC.ZiYUuuRLhe9ffAuU2d6Kt1DaAWwdcFqP/aJqm', NULL, 'Designer', 'users/hello.jpg', '0', 'no', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(29, 'Gaurav Thapaliya', 'gaurav', NULL, '$2y$10$Mddd5Expa87akP.j4QfYa.3oSyBFC/ORNCarHtTlPb6HC4qvd3A4a', NULL, 'All Round Freelancer', 'users/hello.jpg', '0', 'yes', '0', 'This is my bio. Reach me at \"gauravthapaliaya10@gmail.com\"', '', 'no', NULL, 'seller', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(32, 'Raymon', 'raymon', NULL, '$2y$10$Tabg9Y560IlizjOMJdWf4O9PAKtCL0ncetoNs3MHhyYY6AVezlJRG', NULL, 'Full Stack Developer', 'users/hello.jpg', '0', 'yes', '0', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', 'writing'),
(33, 'Nujan', 'nujan', NULL, '$2y$10$rlk/PtMudA/asZNpNi5rieCMOsmjSrqv4J3MlY01xVrYVibMS.vTq', NULL, 'PHP Developer', 'users/293YoKVspBVmcS8lVJzeuWDpmxWuDdTO5y27nLA4.jpg', '0', 'yes', NULL, 'Full time PHP Developer. Studying at Herald College. Feel free to reach me at \"nujan@shotcoder.com.np\"', '', 'yes', 'Fake ID', 'seller', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(34, 'Sabin Adhikari', 'sabin', NULL, '$2y$10$5Tjk6sInJEe2nOQXfJPEV.ldxlygdvncuCVAs7/Cxwwu7c5Xyvqvi', NULL, 'Unity Developer', 'users/hello.jpg', '0', 'yes', '', NULL, '', 'no', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'no', NULL),
(35, 'Ashim Baral', 'ashim', NULL, '$2y$10$qHnRQ2HBjIb4e7dVFgOnU.Y4PbddrKb5CDxJELIQ8tWpo/YciC3AS', NULL, 'bauls', 'users/hello.jpg', '0', 'yes', NULL, 'bauls', 'users/ZMlPbpOIZh0n71HMIzlDFLp1h9LcZUuKfNcOPIQA.png', 'yes', NULL, 'seller', 'bauls', 'users/BneZN3jtVkozS2gdUDpYDhg0GmD883cC0xFCc0ev.png', 'computer-it', '2023-04-26', 'bauls', '2023-04-26', 'users/qfI0cav9yK7mF7WoTII2FpzZeA175VJG0R9rHYYC.png', 'no', NULL),
(99, 'Test', 'test', NULL, '$2y$10$bATFDYcwG2oxrBQSOCSyr.1rsXJx.i4KvVFgKbQufhV2kWhbzw3lG', NULL, 'Sjkadhash', 'users/OkD1IuCESCM8lXZvyEbjQ1EVBcOwTYGz8zvUWb1e.jpg', '1234567890', 'yes', '', 'ajsnda', '', 'no', 'Invalid Details', NULL, 'asjkd', 'users/sh6mqDCzFTL9IYSrSmqiOLg5zXcSNLAl3hAiQ6Wm.jpg', 'account-finance', '2023-04-27', 'jnsad', '2023-04-27', 'users/drAOKQDzAdhitr2O7CUjelFDMhyJqpc8l5JGTHNO.jpg', 'no', NULL);

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
(13, 69, 'Suyogya Gautam', 35, 'Very Satisfactory work! Recommended!', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `citizenship`
--
ALTER TABLE `citizenship`
  ADD KEY `userid_fk` (`userid`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
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
-- Indexes for table `user_reviews`
--
ALTER TABLE `user_reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(120) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(120) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `user_reviews`
--
ALTER TABLE `user_reviews`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `citizenship`
--
ALTER TABLE `citizenship`
  ADD CONSTRAINT `userid_fk` FOREIGN KEY (`userid`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
