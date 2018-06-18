<?php /* Template Name: complete */ ?>
<? session_start(); ?>
<?php get_header(); ?>

<div id="visual">
		<picture> 
			<source media="(max-width: 480px)" srcset="<?php bloginfo('template_directory') ?>/inc/img/contact/contact_mobile.png" /> 
			<img src="<?php bloginfo('template_directory') ?>/inc/img/contact/contact.png" alt="お問い合わせ" width="100%" /> 
		</picture>
		<div class="visual-title-area">
			<h1>お問い合わせ</h1>
		</div>

	</div>

	<div class="wrapper-size">
			<ol class="contact-path">
				<li>
					<a href="index">ホーム</a>
				</li>
				<li>お問い合わせ</li>
			</ol>	

			<article class="left-article">
				この度はお問合せいただき、誠にありがとうございます。<br>
				必要な項目をご記入の上、送信ボタンをクリックしてください。<br>
				※当社の営業時間は、平日月曜日から金曜日の8:30から17:30までとなります。
			</article>
			
			<?php 
				if(isset($_POST['submit'])) {
				    $_SESSION['company'] = $_POST['company'];
				    $_SESSION['division'] = $_POST['division'];
				    $_SESSION['name'] = $_POST['name'];
				    $_SESSION['furigana'] = $_POST['furigana'];
				    $_SESSION['email'] = $_POST['email'];
				    $_SESSION['email(confirm)'] = $_POST['email(confirm)'];
				    $_SESSION['phone'] = $_POST['phone'];
				    $_SESSION['radio'] = $_POST['radio'];
				    $_SESSION['message'] = $_POST['message'];
				    $_SESSION['submit'] = $_POST['submit'];
				}



				if(isset($_SESSION['submit'])) {
					$to = 'ianchen0419@gmail.com'; 

					$subject = 'お問い合わせがありました';


					$content = echo
					'【貴社名】:'.htmlspecialchars($_SESSION['company']);.'<br />'.
					'【部署名】:'.htmlspecialchars($_SESSION['division']);.'<br />'.
					'【お名前】:'.htmlspecialchars($_SESSION['name']);.'<br />'.
					'【ふりがな】:'.htmlspecialchars($_SESSION['furigana']);.'<br />'.
					'【メールアドレス】:'.htmlspecialchars($_SESSION['email']);.'<br />'.
					'【メールアドレス（確認用）】:'.htmlspecialchars($_SESSION['email(confirm)']);.'<br />'.
					'【電話番号】:'.htmlspecialchars($_SESSION['phone']);.'<br />'.
					'【お問い合わせ種類】:'.htmlspecialchars($_SESSION['radio']);.'<br />'.
					'【お問い合わせ内容】:'.nl2br(str_replace("　", "&emsp;", str_replace(" ", "&ensp;", htmlspecialchars($_SESSION['message']))));.'<br />'

					wp_mail($to, $subject, $content);
					session_destroy();
					
					header('Location: complete.html');

				?>

				<p>お問い合わせありがとうございます。<br>追って担当者よりご連絡いたします。</p>

			<?php } else {?>

				<p>送信失敗しました。</p>

			<?php } ?>

			

			


		</div>

<?php get_footer(); ?>
