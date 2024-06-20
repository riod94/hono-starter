const nodemailer = require("nodemailer");
class Mail {
    private static messages: any[] = [];
    static transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_PORT == "465",
        pool: true,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        }
    });

    static async send(to: string, subject: string, html: string, cc?: string, attachments?: any) {
        try {
            const info = await this.transporter.sendMail({
                from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
                to,
                subject,
                html,
                cc,
                attachments
            });

            return info;
        } catch (error) {
            console.error(error);
            this.messages.push({ to, subject, html, cc, attachments });
        }
    }

    static async sendQueue(to: string, subject: string, html: string, cc?: string, attachments?: any) {
        setTimeout(async () => {
            try {
                const info = await Mail.send(to, subject, html, cc, attachments);

                if (process.env.NODE_ENV === 'development') {
                    console.info("Message sent in queue: %s", info.messageId);
                }
            } catch (error) {
                console.error(error);
            }
        }, 500);
    }

    static handleIdle() {
        this.transporter.on('idle', () => {
            // send next message from the pending queue
            while (this.transporter.isIdle() && this.messages.length) {
                // Resend the message from the pending queue
                const { to, subject, html, cc, attachments } = this.messages.shift();
                console.info("Resending message from the pending queue to: %s", to);
                this.sendQueue(to, subject, html, cc, attachments);
            }
        });
    }
}

Mail.handleIdle();

export default Mail;