IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BZZ_Banking_EKN].[dbo].[sp_fulltext_database] @action = 'enable'
end

ALTER DATABASE [BZZ_Banking_EKN] SET ANSI_NULL_DEFAULT OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET ANSI_NULLS OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET ANSI_PADDING OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET ANSI_WARNINGS OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET ARITHABORT OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET AUTO_CLOSE OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET AUTO_SHRINK OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET AUTO_UPDATE_STATISTICS ON 

ALTER DATABASE [BZZ_Banking_EKN] SET CURSOR_CLOSE_ON_COMMIT OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET CURSOR_DEFAULT  GLOBAL 

ALTER DATABASE [BZZ_Banking_EKN] SET CONCAT_NULL_YIELDS_NULL OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET NUMERIC_ROUNDABORT OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET QUOTED_IDENTIFIER OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET RECURSIVE_TRIGGERS OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET  DISABLE_BROKER 

ALTER DATABASE [BZZ_Banking_EKN] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET DATE_CORRELATION_OPTIMIZATION OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET TRUSTWORTHY OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET ALLOW_SNAPSHOT_ISOLATION OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET PARAMETERIZATION SIMPLE 

ALTER DATABASE [BZZ_Banking_EKN] SET READ_COMMITTED_SNAPSHOT OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET HONOR_BROKER_PRIORITY OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET RECOVERY SIMPLE 

ALTER DATABASE [BZZ_Banking_EKN] SET  MULTI_USER 

ALTER DATABASE [BZZ_Banking_EKN] SET PAGE_VERIFY CHECKSUM  

ALTER DATABASE [BZZ_Banking_EKN] SET DB_CHAINING OFF 

ALTER DATABASE [BZZ_Banking_EKN] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 

ALTER DATABASE [BZZ_Banking_EKN] SET TARGET_RECOVERY_TIME = 60 SECONDS 

ALTER DATABASE [BZZ_Banking_EKN] SET DELAYED_DURABILITY = DISABLED 

ALTER DATABASE [BZZ_Banking_EKN] SET QUERY_STORE = OFF

USE [BZZ_Banking_EKN]

ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;

ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;

ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;

ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;

USE [BZZ_Banking_EKN]

/****** Object:  Table [dbo].[Account]    Script Date: 22.10.2020 22:54:37 ******/
SET ANSI_NULLS ON

SET QUOTED_IDENTIFIER ON

CREATE TABLE [dbo].[Account](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](max) NOT NULL,
	[Password] [varchar](max) NOT NULL,
	[Firstname] [varchar](max) NOT NULL,
	[Lastname] [varchar](max) NOT NULL,
	[AccountName] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

/****** Object:  Table [dbo].[Transfer]    Script Date: 22.10.2020 22:54:37 ******/
SET ANSI_NULLS ON

SET QUOTED_IDENTIFIER ON

CREATE TABLE [dbo].[Transfer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Price] [decimal](16, 2) NOT NULL,
	[AccountId] [int] NOT NULL,
 CONSTRAINT [PK_Transfer] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

SET IDENTITY_INSERT [dbo].[Account] ON 

INSERT [dbo].[Account] ([Id], [Username], [Password], [Firstname], [Lastname], [AccountName]) VALUES (1, N'Trump', N'makeamerikagreatagain', N'Donald', N'Trump', N'IE29 AIBK 9311 5212 3456 78')

INSERT [dbo].[Account] ([Id], [Username], [Password], [Firstname], [Lastname], [AccountName]) VALUES (4, N'Biden', N'iamjustanoldguy', N'Joe', N'Biden', N'AD12 0001 2030 2003 5910 0100')

INSERT [dbo].[Account] ([Id], [Username], [Password], [Firstname], [Lastname], [AccountName]) VALUES (5, N'Juerg', N'Lernjournal', N'Juerg', N'Mueller', N'	AT61 1904 3002 3457 3201')

INSERT [dbo].[Account] ([Id], [Username], [Password], [Firstname], [Lastname], [AccountName]) VALUES (6, N'User', N'admin1234', N'Athavan', N'Theva', N'BE68 5390 0754 7034')

SET IDENTITY_INSERT [dbo].[Account] OFF

SET IDENTITY_INSERT [dbo].[Transfer] ON 

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (1, CAST(456122.00 AS Decimal(16, 2)), 1)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (2, CAST(-52.60 AS Decimal(16, 2)), 1)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (3, CAST(855456.00 AS Decimal(16, 2)), 1)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (4, CAST(1258225.00 AS Decimal(16, 2)), 1)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (5, CAST(65498721.00 AS Decimal(16, 2)), 1)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (6, CAST(12333512.00 AS Decimal(16, 2)), 1)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (8, CAST(300500000.00 AS Decimal(16, 2)), 1)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (9, CAST(600800000.00 AS Decimal(16, 2)), 1)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (10, CAST(5000000000.00 AS Decimal(16, 2)), 1)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (11, CAST(-1987654456.00 AS Decimal(16, 2)), 1)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (13, CAST(-500600.00 AS Decimal(16, 2)), 1)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (14, CAST(900852.00 AS Decimal(16, 2)), 4)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (15, CAST(12345678.00 AS Decimal(16, 2)), 4)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (16, CAST(10000000.00 AS Decimal(16, 2)), 4)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (18, CAST(-500400.00 AS Decimal(16, 2)), 4)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (19, CAST(-500987654.00 AS Decimal(16, 2)), 4)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (20, CAST(900005.00 AS Decimal(16, 2)), 4)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (21, CAST(50.00 AS Decimal(16, 2)), 5)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (22, CAST(100.00 AS Decimal(16, 2)), 5)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (23, CAST(-900.00 AS Decimal(16, 2)), 5)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (24, CAST(749.00 AS Decimal(16, 2)), 5)

INSERT [dbo].[Transfer] ([Id], [Price], [AccountId]) VALUES (25, CAST(1.00 AS Decimal(16, 2)), 6)

SET IDENTITY_INSERT [dbo].[Transfer] OFF

ALTER TABLE [dbo].[Transfer]  WITH CHECK ADD  CONSTRAINT [FK_Transfer_Account] FOREIGN KEY([AccountId])
REFERENCES [dbo].[Account] ([Id])

ALTER TABLE [dbo].[Transfer] CHECK CONSTRAINT [FK_Transfer_Account]

USE [master]

ALTER DATABASE [BZZ_Banking_EKN] SET  READ_WRITE 

