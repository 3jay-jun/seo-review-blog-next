import { siteConfig } from "@/config/site";

export default function Footer() {
    return (
        <footer className="border-t bg-muted/30 mt-16">
            <div className="container py-8 text-center text-sm text-muted-foreground">
                <p className="mb-2">© 2026 { siteConfig?.name }. All rights reserved.</p>
                <p>실제 사용 후기와 A/S 사례를 투명하게 작성했습니다.</p>
                <p>같은 업체라도 다른 팀장인 경우, 위 사실과 다를 수 있으니 참고 부탁드립니다.</p>
            </div>
        </footer>
    );
}