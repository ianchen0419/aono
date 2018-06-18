<?php /* Template Name: contact */ ?>

<?php session_start(); 
	if(isset($_POST['code'])) {  
		if($_POST['code'] == $_SESSION['code']){
		        // データは再送信されようとします
				header ( 'Location: index');
				return;
		    }
	}

?>

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
			
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

			<form action="<?php the_permalink(); ?>" method="post">

			<?php endwhile; endif; ?>
			
				<table class="contact-table">
					<tr>
						<th width="35%">貴社名</th>
						<td width="65%">
							<input type="text" name="your_company" />
						</td>
					</tr>
					<tr>
						<th>部署名</th>
						<td>
							<input type="text" name="your_division" />
						</td>
					</tr>
					<tr>
						<th>
							<span>お名前</span>
							<span class="badge">必須</span>
						</th>
						<td>
							<input type="text" name="your_name" required />
						</td>
					</tr>
					<tr>
						<th>
							<span>ふりがな</span>
							<span class="badge">必須</span>
						</th>
						<td>
							<input type="text" name="your_furigana" required />
						</td>
					</tr>
					<tr>
						<th>
							<span>メールアドレス</span>
							<span class="badge">必須</span>
						</th>
						<td>
							<input type="email" name="your_mail" required />
						</td>
					</tr>
					<tr>
						<th>
							<span>メールアドレス（確認用）</span>
							<span class="badge">必須</span>
						</th>
						<td>
							<input type="email" name="your_mail(confirm)" required />
						</td>
					</tr>
					<tr>
						<th>
							<span>電話番号</span>
							<span class="badge">必須</span>
						</th>
						<td>
							<input type="tel" name="your_phone" required />
						</td>
					</tr>
					<tr>
						<th>お問い合わせ種類</th>
						<td>
							<label class="radio-label">
								<input type="radio" name="your_type"  value="soudan" />
								<div class="radio-widget"></div>
								<span>ご相談</span>
							</label>
							<label class="radio-label">
								<input type="radio" name="your_type" value="saiyou" />
								<div class="radio-widget"></div>
								<span>採用について</span>
							</label>
							<label class="radio-label">
								<input type="radio" name="your_type" value="sonota" />
								<div class="radio-widget"></div>
								<span>その他</span>
							</label>
						</td>
					</tr>
					<tr>
						<th>お問い合わせ内容</th>
						<td>
							<textarea cols="30" rows="10" name="your_message"></textarea>
						</td>
					</tr>
				</table>
				
				<input name="code" type="hidden" value="<?php echo rand(10000,100000000000); ?>" />  
				
				<div class="btn-box">
					<input type="submit" name="your_submit"  />
				</div>

			</form>

			<?php

				if (!empty($_POST['your_submit'])){

					// 文字の処理
					$_SESSION['code']=$_POST['code'];

					$company = htmlspecialchars($_POST['your_company']);
					$division = htmlspecialchars($_POST['your_division']);
					$name = htmlspecialchars($_POST['your_name']);
					$furigana = htmlspecialchars($_POST['your_furigana']);
					$mail = htmlspecialchars($_POST['your_mail']);
					$mailConfrim = htmlspecialchars($_POST['your_mail(confirm)']);
					$phone = htmlspecialchars($_POST['your_phone']);
					$type='';

					if($_POST['your_type']=='soudan'){
						$type='ご相談';
					}else if($_POST['your_type']=='siyou'){
						$type='採用について';
					}else if($_POST['your_type']=='sonota'){
						$type='その他';
					}else {
						$type='';
					}

					$message = htmlspecialchars($_POST['your_message']);

					$to = 'ianchen0419@gmail.com'; 
					$subject = 'お問い合わせがございます'; 
					$content = 
					'【貴社名】'.$company."\n".
					'【部署名】'.$division."\n".
					'【お名前】'.$name."\n".
					'【ふりがな】'.$furigana."\n".
					'【メールアドレス】'.$mail."\n".
					'【メールアドレス（確認用）】'.$mailConfrim."\n".
					'【電話番号】'.$phone."\n".
					'【お問い合わせ種類】'.$type."\n".
					'【お問い合わせ内容】'."\n".$message."\n";


					if(wp_mail($to, $subject, $content)) {
					    //成功時の記述
						// print_r('送信成功しました');
						print_r('お問い合わせありがとうございます。<br>追って担当者よりご連絡いたします。');
						$_POST = array();

					} else {
					    //失敗時の記述
						print_r('送信失敗しました');
					}

				}
						
	
				?>


		</div>

<?php get_footer(); ?>