import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта TT MEDIA на почту tanshina97@mail.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '')
    email = body.get('email', '')
    phone = body.get('phone', '')
    company = body.get('company', '')
    package = body.get('package', '')
    message = body.get('message', '')

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    sender = 'tanshina97@mail.ru'
    recipient = 'tanshina97@mail.ru'

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #7C3AED; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 22px;">Новая заявка с сайта TT MEDIA</h1>
      </div>
      <div style="background: #f9f9f9; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; color: #666; width: 140px;">Имя:</td><td style="padding: 10px 0; font-weight: bold;">{name}</td></tr>
          <tr><td style="padding: 10px 0; color: #666;">E-mail:</td><td style="padding: 10px 0; font-weight: bold;">{email}</td></tr>
          <tr><td style="padding: 10px 0; color: #666;">Телефон:</td><td style="padding: 10px 0; font-weight: bold;">{phone}</td></tr>
          {"<tr><td style='padding: 10px 0; color: #666;'>Компания:</td><td style='padding: 10px 0; font-weight: bold;'>" + company + "</td></tr>" if company else ""}
          <tr><td style="padding: 10px 0; color: #666;">Тариф:</td><td style="padding: 10px 0; font-weight: bold; color: #7C3AED;">{package}</td></tr>
          {"<tr><td style='padding: 10px 0; color: #666;'>Сообщение:</td><td style='padding: 10px 0;'>" + message + "</td></tr>" if message else ""}
        </table>
      </div>
    </div>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка TT MEDIA — {package or "без тарифа"}'
    msg['From'] = sender
    msg['To'] = recipient
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
