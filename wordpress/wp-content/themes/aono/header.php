<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset');?>" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Language" content="ja" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<link rel="icon" href="<?php bloginfo('template_directory') ?>/inc/img/top/favicon.ico" />  
<title>株式会社青野工業</title>
<link rel='stylesheet prefetch' href='<?php bloginfo('template_directory') ?>/inc/lib/font-awesome-4.7.0/css/font-awesome.min.css' />
<link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/style.css" />

</head>
<body>

<!-- header -->
<div id="header">
	<div class="wrapper-size">
		<div class="logo-area">
			<a href="index">
				<img src="<?php bloginfo('template_directory') ?>/inc/img/top/aono_logo.png" alt="青野工業" height="80" />
			</a>
		</div>
		<div class="title-area">
			<a href="index">株式会社青野工業</a>
		</div>
		<div class="sitemap-link-area">
			<i class="fa fa-caret-right"></i>
			<a href="sitemap.html">
				<span>サイトマップ</span>
			</a>
		</div>
		<div class="languague-link-area">
			<i class="fa fa-caret-right"></i>
			<a href="javascript:;">
				<span>English</span>
			</a>

		</div>

		<!-- スマホ版 -->
		<div class="mobile-menu-bar">
			<i class="fa fa-bars" onclick="openMobileMenu()"></i>
		</div>
	</div>
</div>

<!-- menu -->
<div id="menu">
	<div class="wrapper-size">
		<ul class="list-wrapper">
			<li class="active">
				<a href="index">
					<span>ホーム</span>
				</a>
			</li>
			<li class="child-head">
				<span>特色</span>
				<ul class="child-menu">
					<a href="advantage1.html">
						<li>特色1</li>
					</a>
					<a href="advantage2.html">
						<li>特色2</li>
					</a>
				</ul>
			</li>
			<li>
				<a href="product.html">
					<span>製品ギャラリー</span>
				</a>
			</li>
			<li class="child-head">
				<span>生産・品質</span>
				<ul class="child-menu">
					<a href="process.html">
						<li>一貫生産体制</li>
					</a>
					<a href="factory.html">
						<li>生産工場</li>
					</a>
					<a href="quality.html">
						<li>品質保証</li>
					</a>
				</ul>
			</li>
			<li class="child-head">
				<span>会社案内</span>
				<ul class="child-menu">
					<a href="profile.html">
						<li>会社案内</li>
					</a>
					<a href="message.html">
						<li>経営理念・沿革</li>
					</a>
					<a href="recruit.html">
						<li>リクルート</li>
					</a>
				</ul>
			</li>
			<li>
				<a href="contact.html">
					<span>お問い合わせ</span>
				</a>
			</li>
		</ul>
	</div>

	<div id="mobileMenu">
		<ul class="mobile-list">
			<li>
				<a href="index">
					<i class="fa fa-home"></i>
					<span>ホーム</span>
				</a>
			</li>
			<li class="mobile-child-wrapper">
				<div class="mobile-child-head">
					<i class="fa fa-trophy"></i>
					<span>特色</span>
				</div>
				<ul class="mobile-child-list">
					<li>
						<a href="advantage1.html">特色1</a>
					</li>
					<li>
						<a href="advantage2.html">特色2</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="product.html">
					<i class="fa fa-list"></i>
					<span>製品ギャラリー</span>
				</a>
			</li>
			<li class="mobile-child-wrapper">
				<div class="mobile-child-head">
					<i class="fa fa-trophy"></i>
					<span>生産・品質</span>
				</div>
				<ul class="mobile-child-list">
					<li>
						<a href="process.html">一貫生産体制</a>
					</li>
					<li>
						<a href="factory.html">生産工場</a>
					</li>
					<li>
						<a href="quality.html">品質保証</a>
					</li>
				</ul>
			</li>
			<li class="mobile-child-wrapper">
				<div class="mobile-child-head">
					<i class="fa fa-trophy"></i>
					<span>会社案内</span>
				</div>
				<ul class="mobile-child-list">
					<li>
						<a href="profile.html">会社案内</a>
					</li>
					<li>
						<a href="message.html">経営理念・沿革</a>
					</li>
					<li>
						<a href="recruit.html">リクルート</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="contact.html">
					<i class="fa fa-envelope-o"></i>
					<span>お問い合わせ</span>
				</a>
			</li>
		</ul>

		<div class="mobile-anchor-area">
			<div class="mobile-anchor-item">
				<a href="sitemap.html">
					<i class="fa fa-caret-right"></i>
					<span>サイトマップ</span>
				</a>
			</div>
			<div class="mobile-anchor-item">
				<a href="javascript:;">
					<i class="fa fa-caret-right"></i>
					<span>English</span>
				</a>
			</div>
		</div>
	</div>
</div>

<!-- motion -->
<?php if (is_home()): ?>

<div id="motion">
		<img src="<?php bloginfo('template_directory') ?>/inc/img/top/aono_logo_2.png" alt="青野工業" />
		<h1>AONO INDUSTRIAL</h1>
	</div>

<?php endif; ?>



