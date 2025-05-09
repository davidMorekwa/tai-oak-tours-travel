import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    // $logo_url = Storage::url('image_assets/logo.jpg')
    return (
        <img src='/storage/image_assets/logo.jpg' alt="Logo" />
    );
}
